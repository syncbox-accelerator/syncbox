import express from "express";
import {
  deleteScheduleHandler,
  retrieveDirectoriesHandler,
  retrieveSchedulesHandler,
  scheduleDownloadHandler,
} from "../controller/directory.controller";
// import { RETRIEVE_DIRECTORIES_SCHEMA } from "../schema/files.schema";
import validateResource from "../utils/validate_resource";

const router = express.Router();

router.get(
  "/api/files",
  // validateResource(RETRIEVE_DIRECTORIES_SCHEMA),
  retrieveDirectoriesHandler
);

router.get(
  "/api/schedules",
  // validateResource(RETRIEVE_DIRECTORIES_SCHEMA),
  retrieveSchedulesHandler
);

router.post(
  "/api/schedules",
  // validateResource(RETRIEVE_DIRECTORIES_SCHEMA),
  scheduleDownloadHandler
);

router.delete(
  "/api/schedules",
  // validateResource(RETRIEVE_DIRECTORIES_SCHEMA),
  deleteScheduleHandler
);

export default router;
