function calculateCredit() {
    let monthsStr = prompt("На скільки місяців бажаєте розбити платіж за авто?", "12");
    let months = parseInt(monthsStr); 
    
    if (isNaN(months) || months <= 0) {
        alert("Будь ласка, введіть коректну кількість місяців (більше нуля).");
    } else {
        let schedule = "Орієнтовний графік платежів (відсоткова ставка включена):\n";
        for (let i = 1; i <= months; i++) {
            schedule += `Місяць ${i}: платіж успішно розраховано.\n`;
        }
        alert(schedule + "\nЗверніться до менеджера для точних розрахунків.");
    }
}

function developerInfo(surname, name, position = "Генеральний директор  Citroen") {
    alert(`Розробка та підтримка сайту автосалону:\n\nПрізвище: ${surname}\nІм'я: ${name}\nПосада: ${position}`);
}


function showDevInfo() {
    developerInfo("Xavier", "Chardon");
}

function compareStrings(str1, str2) {
    if (str1.length > str2.length) {
        alert(`Назва "${str1}" довша. Солідний вибір!`);
    } else if (str2.length > str1.length) {
        alert(`Назва "${str2}" довша. Звучить потужно!`);
    } else {
        alert("Обидві назви однакової довжини. Обидві машини круті!");
    }
}

function compareCarNames() {
    let car1 = prompt("Введіть назву першого авто (наприклад, Lamborghini Diablo):", "Lamborghini Diablo");
    let car2 = prompt("Введіть назву другого авто (наприклад, Porsche Carrera):", "Porsche Carrera");
    if (car1 !== null && car2 !== null) {
        compareStrings(car1, car2);
    }
}

function neonMode() {
    let originalBg = document.body.style.backgroundColor; 
    let originalColor = document.body.style.color;

    document.body.style.backgroundColor = "#1a1a2e"; 
    document.body.style.color = "#00d2ff"; 
    alert("Неоновий режим увімкнено! Насолоджуйтесь нічним автосалоном (30 секунд).");
    
    setTimeout(() => {
        document.body.style.backgroundColor = originalBg; 
        document.body.style.color = originalColor;
    }, 30000); 
}


function goToContacts() {
    let go = confirm("Бажаєте перейти на сторінку з нашими контактами та новинками?");
    if (go) {
        location.href = "contacts.html";
    }
}

function applyVipDiscount() {
    let mainHeading = document.getElementById("top");
    if(mainHeading && !mainHeading.dataset.vip) {
        console.log("Оригінальний HTML заголовка:", mainHeading.outerHTML);
        mainHeading.innerHTML = "👑 " + mainHeading.innerHTML + " (VIP Клієнт)";
        mainHeading.dataset.vip = "true";
    }

    let links = document.querySelectorAll("ul li a");
    links.forEach(link => {
        if(!link.dataset.discount) {
            link.textContent = link.textContent + " [-15% ЗНИЖКА]";
            if(link.firstChild && link.firstChild.nodeType === 3) {
                link.firstChild.data = "⭐ " + link.firstChild.data;
            }
            link.dataset.discount = "true";
        }
    });
    alert("VIP-статус застосовано до елементів навігації та заголовка!");
}

function updatePromoSection() {
    let promo = document.querySelector(".promobox");
    
    if (promo && !promo.dataset.updated) {
        let bonusDiv = document.createElement("div");
        let textNode = document.createTextNode(" + Комплект зимової гуми в подарунок!");
        
        bonusDiv.append(textNode);
        bonusDiv.style.marginTop = "10px";
        bonusDiv.style.color = "#f1c40f";
        promo.append(bonusDiv); 

        let alertSpan = document.createElement("span");
        alertSpan.textContent = "⚡ ТІЛЬКИ СЬОГОДНІ! ";
        promo.prepend(alertSpan);


        let disclaimer = document.createElement("p");
        disclaimer.textContent = "*Деталі акції запитуйте у менеджерів салону.";
        disclaimer.style.fontSize = "0.8em";
        disclaimer.style.color = "#7f8c8d";
        promo.after(disclaimer);

        let oldBold = promo.querySelector("b");
        if(oldBold) {
            let newStrong = document.createElement("strong");
            newStrong.textContent = "МЕГА-АКЦІЯ!";
            newStrong.style.textTransform = "uppercase";
            oldBold.replaceWith(newStrong);
        }
        
        promo.dataset.updated = "true";
    }

    let stickyBtn = document.querySelector(".sticky-back");
    if(stickyBtn) {
        stickyBtn.remove();
        alert("Секретну акцію активовано! До речі, кнопку швидкого скролу вгору прибрано, щоб ви довше затримались на наших пропозиціях 😉");
    } else {
        alert("Акція вже активована!");
    }
}