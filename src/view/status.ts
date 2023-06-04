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
    <span id="js-years-old-view">${data.old} years old</span>
  </div>
  <div class="max-w-[260px] w-full p-2 flex justify-center items-center bg-violet-500 text-center text-white font-bold rounded-md">
    <span id="js-days-view">${data.days} days</span>
  </div>
  <div class="max-w-[260px] w-full p-2 flex justify-center items-center bg-violet-500 text-center text-white font-bold rounded-md">
    <span id="js-yen-view">¥${data.yen}</span>
  </div>
  `

  status_container.append(status_view)
}

// re-rendering years old
export const createCountingUpYearsOld = (old: number) => {
  const years_old_view_container = document.getElementById('js-years-old-view') as HTMLSpanElement
  years_old_view_container.innerText = `${old} years old`
}

// re-rendering days
export const createCountingUpDays = (days: number) => {
  const days_view_container = document.getElementById("js-days-view") as HTMLSpanElement
  days_view_container.innerText = `${days} days`
}

// re-rendering yen
export const createCountingUpYenView = (yen: number) => {
  const yen_view_container = document.getElementById("js-yen-view") as HTMLSpanElement
  yen_view_container.innerText = `¥${yen}`
}
