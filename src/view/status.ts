const status_container = document.getElementById("js-status-container") as HTMLDivElement

export type StatusData = {
  username: string
  old: number
  days: number
  yen: number
}

export const createStatusView = (data: StatusData) => {
  const status_view = document.createElement("div");
  status_view.classList.add("w-full", "flex", "justify-evenly", "gap-2")

  status_view.innerHTML = `
  <div class="max-w-[260px] w-full p-2 flex justify-center items-center bg-violet-500 text-center text-white font-bold rounded-md">
    <span>${data.username}</span>
  </div>
  <div class="max-w-[260px] w-full p-2 flex justify-center items-center bg-violet-500 text-center text-white font-bold rounded-md">
    <span>${data.old} years old</span>
  </div>
  <div class="max-w-[260px] w-full p-2 flex justify-center items-center bg-violet-500 text-center text-white font-bold rounded-md">
    <span>${data.days} days</span>
  </div>
  <div class="max-w-[260px] w-full p-2 flex justify-center items-center bg-violet-500 text-center text-white font-bold rounded-md">
    <span id="js-yen-view">¥${data.yen}</span>
  </div>
  `

  status_container.append(status_view)
}

export const createCountingUpYenView = (yen: number) => {
  const yen_view_container = document.getElementById("js-yen-view") as HTMLSpanElement
  console.log(yen_view_container)
  yen_view_container.innerText = `¥${yen}`
}


