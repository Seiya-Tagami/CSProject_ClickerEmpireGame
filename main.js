function displayNone(ele) {
  ele.classList.remove('block');
  ele.classList.add('hidden');
}

function displayBlock(ele) {
  ele.classList.remove('hidden');
  ele.classList.add('block');
}

const config = {
  initialForm: document.getElementById('initial-form'),
  bankPage: document.getElementById('bank-page'),
  sidePage: document.getElementById('side-page'),
};

class BankAccount {
  constructor(firstName, lastName, email, type, accountNumber, money) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.type = type;
    this.accountNumber = accountNumber;
    this.money = money;
    this.initialDeposit = money;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

function initializeUserAccount() {
  const form = document.getElementById('bank-form');
  let userBankAccount = new BankAccount(
    form.querySelectorAll(`input[name="userFirstName"]`).item(0).value,
    form.querySelectorAll(`input[name="userLastName"]`).item(0).value,
    form.querySelectorAll(`input[name="userEmail"]`)[0].value,
    form.querySelectorAll(`input[name="userAccountType"]:checked`).item(0).value,
    getRandomInteger(1, Math.pow(10, 8)),
    parseInt(form.querySelectorAll(`input[name="userFirstDeposit"]`).item(0).value)
  );

  config.initialForm.classList.add('hidden');
  config.bankPage.append(mainBankPage(userBankAccount));
}

function mainBankPage(bankAccount) {
  const nameLi = document.createElement('li');
  const bankIdLi = nameLi.cloneNode(true);
  const initialDepositLi = nameLi.cloneNode(true);

  nameLi.innerHTML = bankAccount.getFullName();
  bankIdLi.innerHTML = bankAccount.accountNumber;
  initialDepositLi.innerHTML = bankAccount.initialDeposit;

  const infoUl = document.createElement('ul');
  infoUl.classList.add('text-slate-700', 'text-xl', 'text-end');
  infoUl.append(nameLi, bankIdLi, initialDepositLi);

  const infoCon = document.createElement('div');
  infoCon.classList.add('w-full', 'flex', 'justify-end');
  infoCon.append(infoUl);

  const balanceCon = document.createElement('div');
  balanceCon.classList.add('bg-yellow-200', 'px-6', 'py-2', 'text-2xl', 'text-slate-700', 'font-bold', 'flex', 'justify-between', 'rounded-lg');

  balanceCon.innerHTML = `
  <span>Available Balance</span>
  <span>${bankAccount.money}</span>
    `;

  const menuCon = document.createElement('div');
  menuCon.classList.add('w-full', 'flex', 'items-center', 'justify-between', 'text-white', 'font-bold');
  menuCon.innerHTML = `
            <button id="js-withdrawBtn" class="bg-slate-500 p-6 rounded-lg min-w-[160px] flex items-center gap-2">
              WITHDRAWAL
              <i class="fas fa-wallet fa-2x"></i>
            </button>
            <button id="js-depositBtn" class="bg-slate-500 p-6 rounded-lg min-w-[160px] flex items-center gap-2">
              DEPOSIT
              <i class="fas fa-coins fa-2x"></i>
            </button>
            <button id="js-comeBackLaterBtn" class="bg-slate-500 p-6 rounded-lg min-w-[160px] flex items-center gap-2">
              COME BACK LATER
              <i class="fas fa-home fa-2x"></i>
            </button>

  `;

  const container = document.createElement('div');
  container.classList.add('w-[720px]', 'mx-auto', 'mt-44', 'p-4', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow', 'sm:p-8', 'flex', 'flex-col', 'gap-6');
  container.append(infoCon, balanceCon, menuCon);

  menuCon.querySelector('#js-withdrawBtn').addEventListener('click', () => {
    withDrawController(bankAccount);
  });

  menuCon.querySelector('#js-depositBtn').addEventListener('click', () => {
    alert('deposit');
  });

  menuCon.querySelector('#js-comeBackLaterBtn').addEventListener('click', () => {
    alert('come back later');
  });

  return container;
}

function getRandomInteger(min, max) {
  let randomNum = Math.floor(Math.random() * (max - min) + min);
  return randomNum;
}

function billInputSelector(title) {
  const container = document.createElement('div');
  container.classList.add('space-y-4');
  container.innerHTML = `
    <h5 class="text-4xl font-medium text-gray-900 text-center">${title}</h5>
    <div class="flex items-center justify-between gap-4">
      <label>$100</label>
      <input
        type="number"
        name="number"
        id="number"
        data-bill="100"
        class="js-bill-input bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-[360px] w-full p-2.5 text-end"
        value="0"
      />
    </div>
    <div class="flex items-center justify-between gap-4">
      <label>$50</label>
      <input
        type="number"
        name="number"
        id="number"
        data-bill="50"
        class="js-bill-input bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-[360px] w-full p-2.5 text-end"
        value="0"
      />
    </div>
    <div class="flex items-center justify-between gap-4">
      <label>$20</label>
      <input
        type="number"
        name="number"
        id="number"
        data-bill="20"
        class="js-bill-input bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-[360px] w-full p-2.5 text-end"
        value="0"
      />
    </div>
    <div class="flex items-center justify-between gap-4">
      <label>$10</label>
      <input
        type="number"
        name="number"
        id="number"
        data-bill="10"
        class="js-bill-input bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-[360px] w-full p-2.5 text-end"
        value="0"
      />
    </div>
    <div class="flex items-center justify-between gap-4">
      <label>$5</label>
      <input
        type="number"
        name="number"
        id="number"
        data-bill="5"
        class="js-bill-input bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-[360px] w-full p-2.5 text-end"
        value="0"
      />
    </div>
    <div class="flex items-center justify-between gap-4">
      <label>$1</label>
      <input
        type="number"
        name="number"
        id="number"
        data-bill="1"
        class="js-bill-input bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-[360px] w-full p-2.5 text-end"
        value="0"
      />
    </div>
    <div class="w-full p-2 text-center bg-yellow-200 font-bold text-xl">
      <span class="js-withdrawTotal">$0.00</span>
    </div>

  `;
  container.append(backNextBtn('back', 'next'));
  return container;
}

/**
 * ボタンのHTMLを作成
 * @param {string} backString
 * @param {string} nextString
 * @returns {HTMLDivElement}
 */
function backNextBtn(backString, nextString) {
  const container = document.createElement('div');
  container.classList.add('flex', 'items-center', 'gap-4');
  container.innerHTML = `
  <button
  type="submit"
  class="js-back-btn w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
>
  ${backString}
</button>
<button
  type="submit"
  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
>
${nextString}
</button>
  `;

  return container;
}

function withDrawController(bankAccount) {
  displayNone(config.bankPage);
  displayBlock(config.sidePage);

  config.bankPage.innerHTML = '';
  config.sidePage.innerHTML = '';
  config.sidePage.append(withDrawPage(bankAccount));
}

/**
 * withDrawPageの描画と内部の処理
 * @returns {void}
 */
function withDrawPage(bankAccount) {
  const container = document.createElement('div');
  container.classList.add('w-full', 'max-w-lg', 'p-4', 'mx-auto', 'mt-20', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow', 'sm:p-6', 'md:p-8');

  const withdrawContainer = document.createElement('form');
  withdrawContainer.setAttribute('action', '#');
  withdrawContainer.append(billInputSelector('Please Enter The Withdrawal Amount'));

  container.append(withdrawContainer);

  const billInputs = withdrawContainer.querySelectorAll('.js-bill-input');
  billInputs.forEach((billInput) => {
    billInput.addEventListener('change', (e) => {
      billSummation(billInputs);
      document.querySelector('.js-withdrawTotal').innerHTML = billSummation(billInputs);
    });
  });

  const backBtn = withdrawContainer.querySelector('.js-back-btn');
  backBtn.addEventListener('click', () => {
    displayNone(config.sidePage);
    displayBlock(config.bankPage);
    config.bankPage.append(mainBankPage(bankAccount));
  });

  return container;
}

/**
 * billInputsの計算
 * @param {NodeList} billInputs
 * @returns {number}
 */
function billSummation(billInputs) {
  const dollars = [100, 50, 20, 10, 5, 1];
  let total = 0;

  for (let i = 0; i < dollars.length; i++) {
    total += billInputs[i].value * dollars[i];
  }

  return total;
}
