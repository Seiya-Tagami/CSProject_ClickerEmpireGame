const config = {
  initialForm: document.getElementById('initial-form'),
  bankPage: document.getElementById('bank-page'),
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

function initializeUserAcount() {
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
    alert('withdraw');
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
