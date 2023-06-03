import { hamburgerController } from "./controller/hamburger";
import { optionsController } from "./controller/options";
import { user } from "./model/user";
import { createOptionsView } from "./view/options";
import { StatusData, createStatusView } from "./view/status";
import { OPTIONS_DATA } from "./view/constants";

const InitInjectingData: StatusData = {
  username: user.username,
  old: user.old,
  days: user.days,
  yen: user.yen
}

const initView = () => {
  createStatusView(InitInjectingData)
  createOptionsView(OPTIONS_DATA)
}

const initController = () => {
  optionsController()
  hamburgerController()
}

initView()
initController()