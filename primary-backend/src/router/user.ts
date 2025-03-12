import Router from "express";
import { authmiddleware } from "../middleware";
import { SignupSchema } from "../types";
import { prismaclient } from "../db";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { JWT_SECRET } from "../conig";

const router = Router();

router.post("/signup", async (req, res) => {
    const body = req.body;
    const parsedData = SignupSchema.safeParse(body);

    if (!parsedData.success) {
        return res.status(400).json({
            error: parsedData.error,
            message: "Invalid data"
        });
    }

    const userExists = await prismaclient.user.findFirst({
        where: {
            email: parsedData.data.username
        }
    })

    if (userExists) {
        return res.status(403).json({
            message: "User already Exists"
        })
    }
    const hashedPassword = await bcrypt.hash(parsedData.data.password, 10);

    await prismaclient.user.create({
        data: {
            email: parsedData.data.username,
            name: parsedData.data.name,
            password: hashedPassword
        }
    })

    return res.json({
        message: "user created"
    })
});
router.post("/signin", async (req, res) => {
    const body = req.body;
    const parsedData = SignupSchema.safeParse(body);

    if (!parsedData.success) {
        return res.status(400).json({
            error: parsedData.error,
            message: "Invalid data"
        });
    }

    const user = await prismaclient.user.findFirst({
        where: {
            email: parsedData.data.username,
        }
    });

    if(!user){
        return res.status(401).json({
            message: "Invalid username"
        })
    }

    const isPasswordValid = await bcrypt.compare(parsedData.data.password, user.password);

    if(!isPasswordValid){
        return res.status(401).json({
            message: "Invalid password"
        })
    }

    const token = jwt.sign({
        id: user.id,
    },JWT_SECRET)

    res.json({
        token
    })
});


router.get("/", authmiddleware, async (req, res) => {
    const id = req.id;

    const user = await prismaclient.user.findFirst({
        where: { 
            id
        }, select :{
            email: true,
            name: true
        }
    })

    return res.json({
        user
    })
})

export const userRouter = router;