import fs from "fs";
import log from "../utils/logger";

export default function readFile(file_name: string) {
  if (fs.existsSync(file_name)) {
    log.info(`Reading file... ${file_name}`);
    try {
      let content = fs.readFileSync(file_name, "utf8");
      return { content };
    } catch (error) {
      log.error(`An error occurred... ${error}`);
      return { error: error };
    }
  } else {
    log.error(`${file_name} not exists ...`);
    return { error: `${file_name} not exists ...` };
  }
}
