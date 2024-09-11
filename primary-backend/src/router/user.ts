import Router from "express";
const router = Router();

router.get("/signup", (req, res) => {
    console.log("User route hit");
});

export const userRouter = router;