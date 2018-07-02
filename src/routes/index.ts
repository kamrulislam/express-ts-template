import { Router } from "express";
import * as controller from "../welcome/index";

export const index = Router();

index.get("/", controller.index);
