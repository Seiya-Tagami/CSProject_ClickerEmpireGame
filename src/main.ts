// -- This application's entry file.
import { hamburgerController, statusController, optionsController } from "./controller";

const initApp = () => {
  statusController()
  optionsController()
  hamburgerController()
}

initApp()