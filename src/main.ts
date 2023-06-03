import { hamburgerController } from "./controller/hamburger";
import { optionsController } from "./controller/options";
import { createOptionsView } from "./view/options";

const initView = () => {
  createOptionsView()
}

const initController = () => {
  optionsController()
  hamburgerController()
}

initView()
initController()