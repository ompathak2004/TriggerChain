

import { Router } from "express";
import { prismaclient } from "../db";

const router = Router();

router.get("/available", async (req, res) => {
    const availableActions = await prismaclient.availableAction.findMany({});
    res.json({
        availableActions
    })
});

export const actionRouter = router;