import { hamburger_container } from "./common/containers"

type HamburgerViewData = {
  burgers: number
}

export const createHamburgerView = (data: HamburgerViewData) => {
  hamburger_container.innerHTML = ''

  const hamburger_view = document.createElement("div")
  hamburger_view.classList.add("w-full", "h-full", "p-4", "bg-slate-200")
  hamburger_view.innerHTML = `
    <div class="flex flex-col items-center p-2 bg-indigo-700 text-white font-bold rounded">
      <span id="js-nums-of-burgers">${data.burgers} Burgers</span>
      <span>one click ￥25</span>
    </div>
    <img src="images/hamburger.png" alt="" id="js-hamburger-click" class="w-full mt-16 cursor-pointer" />
  `

  hamburger_container.append(hamburger_view)
}

export const createCountingUpBurgersView = (burgers: number) => {
  const nums_of_burgers_container = document.getElementById("js-nums-of-burgers") as HTMLSpanElement
  nums_of_burgers_container.innerText = `${burgers} Burgers`
}