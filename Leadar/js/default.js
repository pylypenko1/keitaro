!(function ($, _) {
  var zj,
    Aj,
    Sk,
    nl,
    El,
    Vl,
    _l,
    cm,
    tm,
    Cm,
    Mm,
    Xm,
    Zm,
    wo,
    Co,
    Jo,
    Lo,
    So,
    Zo;
  Element.prototype.matches ||
    (Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector),
    Array.prototype.find ||
      Object.defineProperty(Array.prototype, "find", {
        value: function (e) {
          if (null == this) throw TypeError('"this" is null or not defined');
          var t = Object(this),
            i = t.length >>> 0;
          if ("function" != typeof e)
            throw TypeError("predicate must be a function");
          for (var a = arguments[1], r = 0; r < i; ) {
            var n = t[r];
            if (e.call(a, n, r, t)) return n;
            r++;
          }
        },
        configurable: !0,
        writable: !0,
      }),
    window.Promise ||
      ((window.Promise = function (e) {
        (this.deferred = $.Deferred()),
          e(this.deferred.resolve, this.deferred.reject);
      }),
      (Promise.prototype.then = function (e, t) {
        this.deferred.then(e, t);
      }),
      (Promise.prototype.catch = function (e) {
        this.then(void 0, e);
      }),
      (Promise.prototype.finally = function (e) {
        this.then(
          function () {
            e();
          },
          function () {
            e();
          }
        );
      })),
    (creatium.$ = window.$),
    (creatium.VERSION = "4.2"),
    void 0 === creatium.origin && (creatium.origin = location.origin),
    void 0 === creatium.region &&
      ((creatium.region = "ru"),
      0 <
        document.childNodes[1].textContent
          .toLowerCase()
          .indexOf("creatium.app") && (creatium.region = "int"),
      document.getElementsByClassName("area")[0].classList.add("region-int")),
    (creatium.init = {
      queue: [],
      complete: !1,
      local: function (e) {
        if ((creatium.init.queue.push(e), creatium.init.fired))
          try {
            e($(document.body));
          } catch (e) {
            console.error(e);
          }
      },
      global: function (t) {
        creatium.init.local(function (e) {
          e[0] === document.body && t(e);
        });
      },
      trigger: function (t) {
        creatium.init.queue.forEach(function (e) {
          try {
            e($(t));
          } catch (e) {
            console.error(e);
          }
        }),
          t === document.body && (creatium.init.fired = !0);
      },
    }),
    document.addEventListener("DOMContentLoaded", function () {
      window.requestAnimationFrame(function () {
        creatium.async.css.forEach(function (e) {
          var t = document.createElement("link");
          t.setAttribute("type", "text/css"),
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", e),
            document.head.appendChild(t);
        }),
          !0 !== creatium.device_fix &&
            creatium.async.js.push(creatium.async.js_adaptive_sections);
        var i = 0;
        creatium.async.js.forEach(function (e) {
          !(0 < e.indexOf("/async/") || 0 < e.indexOf("/adaptive-sections/")) ||
            ((t = location.search.substr(1)).length &&
              e.indexOf(t) < 0 &&
              (e += "&" + t));
          var t = document.createElement("script");
          (t.onload = function () {
            ++i === creatium.async.js.length &&
              (creatium.async.ready(),
              setTimeout(function e() {
                creatium.init.fired ? creatium.api.init() : setTimeout(e, 10);
              }, 1));
          }),
            (t.onerror = t.onload),
            t.setAttribute("async", ""),
            t.setAttribute("type", "text/javascript"),
            t.setAttribute("src", e),
            document.head.appendChild(t);
        }),
          creatium.init.trigger(document.body),
          creatium.cdn.init();
      });
    }),
    (creatium.async = {
      css: creatium.async.css,
      js: creatium.async.js,
      js_adaptive_sections: creatium.async.js_adaptive_sections,
      loaded: !1,
      modals: null,
      cuts: null,
      init: _.once(function (e) {
        (creatium.async.modals = e.modals),
          (creatium.async.cuts = _.map(e.cuts, function (e, t) {
            return {
              key: t,
              attached: !1,
              html: e,
              placeholder: null,
              el: null,
            };
          })),
          creatium.init.local(function (e) {
            e.find("div[data-cut]").each(function () {
              var e = this,
                t = e.getAttribute("data-cut"),
                i = _.find(creatium.async.cuts, { key: t });
              i
                ? ((i.placeholder = e),
                  creatium.lazy.add($(i.placeholder), function () {
                    if (i.el) var e = i.el;
                    else {
                      var t = $.parseHTML(i.html, null, !0);
                      if (1 < t.length)
                        throw new Error("Cut has more than 1 element");
                      e = t[0];
                    }
                    $(i.placeholder).replaceWith(e),
                      (i.attached = !0),
                      creatium.init.trigger(e);
                  }))
                : console.error("Missing cut", { placeholder: e, key: t });
            });
          });
      }),
      ready: function e(t) {
        (e.list = e.list || []),
          t instanceof Function
            ? e.fired
              ? t()
              : e.list.push(t)
            : (e.list.forEach(function (e) {
                e();
              }),
              (e.fired = !0));
      },
    }),
    document.addEventListener("DOMContentLoaded", function (i) {
      var a = document.addEventListener;
      document.addEventListener = function (e, t) {
        if ("DOMContentLoaded" !== e) return a.apply(this, arguments);
        t(i);
      };
    }),
    creatium._async
      ? (creatium.async.init(creatium._async), delete creatium._async)
      : Object.defineProperty(creatium, "_async", {
          configurable: !0,
          set: function (e) {
            creatium.async.init(e), delete creatium._async;
          },
        }),
    (creatium.store = {
      get: function (e) {
        return JSON.parse(localStorage.getItem(e));
      },
      set: function (e, t) {
        return localStorage.setItem(e, JSON.stringify(t));
      },
      listen: function (t, i) {
        window.addEventListener("storage", function (e) {
          e.key === t && i(JSON.stringify(e.newValue));
        });
      },
    }),
    (creatium.syncInterval = function e(t, i) {
      var a;
      (e.functions = e.functions || {})[i]
        ? e.functions[i].push(t)
        : ((e.functions[i] = [t]),
          (a = function () {
            e.functions[i].forEach(function (e) {
              e();
            }),
              setTimeout(a, i);
          }),
          setTimeout(a, i));
    }),
    (creatium.waitForAppear = function (a, r) {
      creatium.init.local(function (e) {
        var t = e[0];
        if (a instanceof HTMLElement) {
          for (var i = a; (i = i.parentElement); )
            if (i === t) return void r(a);
        } else {
          t.matches(a) && r(t);
          e = t.querySelectorAll(a);
          e && Array.prototype.forEach.call(e, r);
        }
      });
    }),
    (creatium.watchDom = function (e) {
      for (var t = [e], i = []; 0 < t.length; ) {
        var a = t.shift();
        if (3 === a.nodeType)
          a.textContent.match(/\{\{.+?\}\}/) &&
            i.push({ node: a, where: "text", template: a.textContent });
        else if (1 === a.nodeType)
          for (
            var t = t.concat([].slice.call(a.childNodes)),
              r = a.attributes,
              n = 0;
            n < a.attributes.length;
            n++
          ) {
            var o = r.item(n);
            o.value.match(/\{\{.+?\}\}/) &&
              i.push({
                node: a,
                where: "attribute",
                attribute: o.name,
                template: o.value,
              });
          }
      }
      return (
        i.forEach(function (i) {
          (i.evaluates = []),
            i.template.match(/\{\{.+?\}\}/g).forEach(function (e) {
              var t = e.substring(2, e.length - 2),
                t = new Function(
                  "variables",
                  "with (variables) { return " + t + " }"
                );
              i.evaluates.push({ macros: e, fn: t });
            });
        }),
        function (a) {
          i.forEach(function (e) {
            var i = e.template;
            e.evaluates.forEach(function (e) {
              var t;
              try {
                t = e.fn(a);
              } catch (e) {
                console.error("watchDom Error", e), (t = "");
              }
              i = i.replace(e.macros, t);
            }),
              i !== e.last &&
                ((e.last = i),
                "text" === e.where
                  ? (e.node.textContent = i)
                  : "attribute" === e.where &&
                    e.node.setAttribute(e.attribute, i));
          });
        }
      );
    }),
    (creatium.closest = function (e, t) {
      var i = $(e),
        e = i.closest(t);
      if (e.length) return e;
      e = i.closest(".cr-portal");
      if (e.length) return creatium.closest(e.data("portal-parent"), t);
      i = i.closest(".modal");
      if (i.length) {
        (i = i.attr("data-uid")), (i = $('.modal-link[data-uid="' + i + '"]'));
        return creatium.closest(i, t);
      }
      return $();
    }),
    (creatium.legacy_report = function (e) {}),
    (creatium.l10n = function (t, i) {
      if (((i = i || ""), "ru" === creatium.lang)) return t;
      var e = creatium.l10n.dictionary.find(function (e) {
        return e.original === t && e.context === i;
      });
      return e && e[creatium.lang]
        ? e[creatium.lang]
        : (console.error("No translation for ", t), t);
    }),
    (creatium.l10n.dictionary = [
      {
        original: "Не удалось отправить форму!",
        context: "",
        en: "Error sending form",
        "pt-BR": "Erro ao enviar o formulário",
        es: "Error al enviar el formulario",
        "zh-CN": "发送表格出错",
        de: "Fehler beim Senden des Formulars",
        it: "Errore invio modulo",
        fr: "Erreur lors de l'envoi du formulaire",
        pl: "Nie udało się wysłać formularza",
        lt: "Nepasisekė nusiųsti formą!",
        lv: "Jūsu ziņojums netika nosūtīts!",
        bg: "Неуспешно изпращане на заявката!",
        cs: "Chyba při odesílání formuláře",
        he: "שליחת הטופס נכשלה",
        el: "Η φόρμα δε στάλθηκε",
        am: "Հայտն ուղարկված չէ, խնդրում ենք կրկին փորձել",
        ge: "ფორმა არ გაიგზავნა!",
        ro: "A apărut o eroare la trimiterea formularului",
        kz: "Нысаныңыз жіберілмеді",
        uk: "Помилка надсилання форми",
      },
      {
        original: "Неправильно заполнены поля:",
        context: "",
        en: "These fields were not filled in correctly:",
        "pt-BR": "Estes campos não foram preenchidos corretamente:",
        es: "Estos campos no se han rellenado correctamente:",
        "zh-CN": "以下字段未正确填写：",
        de: "Diese Felder wurden nicht korrekt ausgefüllt:",
        it: "Questi campi non sono stati compilati correttamente:",
        fr: "Ces champs n’ont pas été renseignés correctement :",
        pl: "Te pola nie zostały poprawnie wypełnione:",
        lt: "Neteisingai užpildyti laukai:",
        lv: "Lauks nav aizpildīts vai ir aizpildīts nepareizi:",
        bg: "Грешно запълнени полета:",
        cs: "Tato pole nebyla vyplněna správně:",
        he: "השדות הבאים לא מולאו כהלכה:",
        el: "Αυτά τα πεδία δε συμπληρώθηκαν σωστά:",
        am: "Տողերը սխալ են լրացված",
        ge: "შემდეგი ველები არასწორად არის შევსებული:",
        ro: "Aceste câmpuri nu au fost completate corect:",
        kz: "Бұл өрістер дұрыс толтырылмаған:",
        uk: "Ці поля були заповнені неправильно:",
      },
      {
        original: "Пожалуйста, повторите отправку через пару секунд.",
        context: "",
        en: "Please try again in a few seconds.",
        "pt-BR": "Tente novamente em alguns segundos.",
        es: "Por favor, inténtelo de nuevo dentro de unos segundos.",
        "zh-CN": "请稍后再试",
        de: "Bitte versuchen Sie es in ein paar Sekunden erneut.",
        it: "Riprova tra pochi secondi.",
        fr: "Veuillez réessayer dans quelques secondes.",
        pl: "Powtórz za parę sekund.",
        lt: "Prašome pakartoti siuntimą po keletą sekundžių.",
        lv: "Lūdzu, nosūtiet atkārtoti pēc dažām sekundēm.",
        bg: "Моля, изпратете отново заявката след няколко секунди.",
        cs: "Prosím zkuste to znovu za pár vteřin.",
        he: "נסה שוב בעוד כמה שניות.",
        el: "Προσπαθήστε ξανά σε μερικά δευτερόλεπτα.",
        am: "Տողերը սխալ են մուտքագրված: Խնդրում ենք կրկին փորձել մի քանի վարկյանից",
        ge: "გაიმეორეთ გაგზავნის",
        ro: "Vă rugăm să încercați din nou peste câteva secunde.",
        kz: "Бірнеше секундтан кейін қайталап көріңіз.",
        uk: "Будь ласка, спробуйте ще раз за кілька секунд.",
      },
      {
        original: "Поле «%field%» обязательно для заполнения.",
        context: "",
        en: 'The "%field%" field is required.',
        "pt-BR": 'O campo "%field%" é necessário.',
        es: "El campo %field% es obligatorio.",
        "zh-CN": "“%field%” 为必填字段。",
        de: "Das Feld „%field%“ ist ein Pflichtfeld.",
        it: "Il campo «%field%» è obbligatorio.",
        fr: "Vous devez remplir le champ « %field% ».",
        pl: 'Pole "%field%" musi być wypełnione.',
        lt: "Laukas «%field%» būtinas užpildymui.",
        lv: "Lauks «%field%» jāaizpilda obligāti.",
        bg: "Полето «%field%» е задължително за запълване.",
        cs: "Pole „%field%“ je povinné.",
        he: 'השדה "%field%" הוא שדה חובה.',
        el: "Απαιτείται πεδίο «%field%».",
        am: "Խնդրում ենք լրացրեք «%field%» տողը, այն պարտադիր է",
        ge: "ამ ველის «%field%» შევსება აუცილებელია.",
        ro: "Câmpul „%field%” este obligatoriu.",
        kz: '"%field%" өрісін толтыру қажет.',
        uk: "Поле «%field%» є обов'язковим.",
      },
      {
        original: "Поле «%field%» должно содержать ваш настоящий e-mail адрес.",
        context: "",
        en: 'The "%field%" field must contain your actual email address.',
        "pt-BR":
          'O campo "%field%" deve conter o seu endereço de e-mail correto.',
        es: "El campo %field% debe contener su dirección de correo electrónico real.",
        "zh-CN": "“%field%” 字段必须包含真实的电子邮件地址。",
        de: "Das Feld „%field%“ muss Ihre tatsächliche E-Mail Adresse enthalten.",
        it: "Il campo «%field%» deve contenere il tuo indirizzo e-mail.",
        fr: "Le champ « %field% » doit contenir votre adresse e-mail réelle.",
        pl: 'Pole "%field%" musi zawierać Twój adres e-mail.',
        lt: "Laukas «%field%» turi būti nurodytas jūsų esamas email adresas.",
        lv: "Laukā «%field%» jābūt Jūsu īstai e-pasta adresei.",
        bg: "Полето «%field%» трябва да съдържа истинският Ви имейл адрес.",
        cs: "Pole «%field%» musí obsahovat vaši správnou e-mail adresu.",
        he: 'בשדה "%field%" עליך להזין את כתובת הדוא"ל הפעילה שלך.',
        el: "Το πεδίο «%field%» πρέπει να περιλαμβάνει την πραγματική διεύθυνση e-mail σας.",
        am: "Խնդրում ենք «%field%» տողում գրանցել Ձեր իրական էլ. փոստի հասցեն",
        ge: "ეს ველი «%field%» უნდა შეიცავდეს თქვენი ნამდვილი ელ-ფოსტის მისამართს.",
        ro: "Câmpul „%field%” trebuie să conțină adresa dvs. e-mail veridică.",
        kz: '"%field%" өрісінде сіздің нақты э-пошта мекенжайыңыз болуы тиіс.',
        uk: "Поле «%field%» повинно містити вашу справжню електронну поштову адресу.",
      },
      {
        original: "Поле «%field%» должно содержать правильный номер телефона.",
        context: "",
        en: 'The "%field%" field must contain your correct phone number.',
        "pt-BR": 'O campo "%field%" deve conter um número de telefone válido.',
        es: "El campo %field% debe contener su numero de teléfono correcto.",
        "zh-CN": "“%field%” 字段必须包含有效的手机号码。",
        de: "Das Feld „%field%“ muss Ihre richtige Telefonnummer enthalten.",
        it: "Il campo «%field%» deve contenere il tuo numero di telefono.",
        fr: "Le champ « %field% » doit contenir un numéro de téléphone valide.",
        pl: 'Pole "%field%" musi zawierać prawidłowy numer telefonu.',
        lt: "Laukas «%field%» turi būti teisingai nurodytas telefono numeris.",
        lv: "Laukā «%field%» jānorāda īstais telefona numurs.",
        bg: "Полето «%field%» задължително трябва да съдържа правилният Ви телефонен номер.",
        cs: "Pole «%field%» musí obsahovat vaše správné telefonní číslo.",
        he: 'בשדה "%field%" עליך להזין את מספר הטלפון המדויק שלך.',
        el: "Το πεδίο «%field%» πρέπει να περιέχει τον σωστό αριθμό τηλεφώνου.",
        am: "Խնդրում ենք «%field%» տողում գրանցել Ձեր ճիշտ հեռախոսահամարը",
        ge: "ეს ველი «%field%» უნდა შეიცავდეს რეალურად არსებულ ტელეფონის ნომერს.",
        ro: "Câmpul „%field%” trebuie să conțină numărul dvs. de telefon veridic.",
        kz: '"%field%" өрісінде дұрыс телефон нөмірі болуы тиіс.',
        uk: "Поле «%field%» повинно містити ваш правильний номер телефону.",
      },
      {
        original: "Поле «%field%» должно быть правильным числом.",
        context: "",
        en: 'The "%field%" field must be an actual number.',
        "pt-BR": 'O campo "%field%" deve conter um número válido.',
        es: "El campo %field% debe ser un número real.",
        "zh-CN": "“%field%” 字段必须包含有效的号码。",
        de: "Das Feld „%field%“ muss eine gültige Zahl sein.",
        it: "Il campo «%field%» deve contenere un numero.",
        fr: "Le champ « %field% » doit être un nombre valide.",
        pl: 'Pole "%field%" musi zawierać właściwy numer.',
        lt: "Laukas «%field%» turu būti nurodytas teisingas skaičius.",
        lv: "Laukā «%field%» jānorāda tikai cipari.",
        bg: "Полето «%field%» трябва да съдържа правилно изписано число.",
        cs: "Pole „%field%“ musí být skutečný počet.",
        he: 'בשדה "%field%" עליך להזין מספר אמיתי.',
        el: "Το πεδίο «%field%» πρέπει να είναι πραγματικός αριθμός.",
        am: "Խնդրում ենք «%field%» տողում գրանցել ճիշտ ամսաթիվ",
        ge: "ამ ველში «%field%» უნდა იყოს სწორი რიცხვი.",
        ro: "Câmpul „%field%” trebuie să conțină un număr real.",
        kz: '"%field%" өрісінде нақты сан болуы тиіс.',
        uk: "Поле «%field%» має бути дійсним числом.",
      },
      {
        original: "Товар не найден",
        context: "",
        en: "Product not found",
        "pt-BR": "Produto não encontrado",
        es: "Producto no hallado",
        "zh-CN": "未找到产品",
        de: "Produkt nicht gefunden",
        it: "Prodotto non trovato",
        fr: "Produit non trouvé",
        pl: "Nie znaleziono produktu",
        lt: "Товар не найден",
        lv: "Товар не найден",
        bg: "Товар не найден",
        cs: "Produkt nenalezen",
        he: "המוצר לא נמצא",
        el: "Το προϊόν δεν βρέθηκε",
        am: "Товар не найден",
        ge: "Товар не найден",
        ro: "Produsul nu a fost găsit",
        kz: "Өнім табылмады",
        uk: "Продукт не знайдено",
      },
      {
        original: "Кнопка должна находиться в карточке товара.",
        context: "",
        en: "The button should be located on the product card.",
        "pt-BR": "O botão deve estar localizado no cartão do produto.",
        es: "El botón debería encontrarse en la tarjeta del producto.",
        "zh-CN": "按钮应该位于产品卡上。",
        de: "Die Schaltfläche sollte sich auf der Produktkarte befinden.",
        it: "Il pulsante dovrebbe trovarsi sulla scheda del prodotto.",
        fr: "Le bouton devrait se trouver sur la fiche produit.",
        pl: "Przycisk powinien znajdować się na karcie produktu.",
        lt: "Кнопка должна находиться в карточке товара.",
        lv: "Кнопка должна находиться в карточке товара.",
        bg: "Кнопка должна находиться в карточке товара.",
        cs: "Tlačítko by se mělo nacházet na kartě produktu.",
        he: "הלחצן אמור להופיע בכרטיס המוצר.",
        el: "Το κουμπί πρέπει να βρίσκεται στην καρτέλα προϊόντος.",
        am: "Кнопка должна находиться в карточке товара.",
        ge: "Кнопка должна находиться в карточке товара.",
        ro: "Butonul ar trebui să fie amplasat pe cardul produsului.",
        kz: "Түйме өнім карточкасында орналасуы тиіс.",
        uk: "Кнопка має бути розташована на картці продукту.",
      },
      {
        original: "Количество",
        context: "",
        en: "Quantity",
        "pt-BR": "Quantidade",
        es: "Cantidad",
        "zh-CN": "数量",
        de: "Menge",
        it: "Quantità",
        fr: "Quantité",
        pl: "Ilość",
        lt: "Количество",
        lv: "Количество",
        bg: "Количество",
        cs: "Množství",
        he: "כמות",
        el: "Ποσότητα",
        am: "Количество",
        ge: "Количество",
        ro: "Cantitate",
        kz: "Саны",
        uk: "Кількість",
      },
      {
        original: "Добавлено в корзину!",
        context: "",
        en: "Added to cart!",
        "pt-BR": "Adicionado ao carrinho!",
        es: "¡Se ha añadido al carrito!",
        "zh-CN": "已加至购物车！",
        de: "Zum Warenkorb hinzugefügt!",
        it: "Aggiunto al carrello!",
        fr: "Ajouté au panier !",
        pl: "Dodano do koszyka!",
        lt: "Добавлено в корзину!",
        lv: "Добавлено в корзину!",
        bg: "Добавлено в корзину!",
        cs: "Přidáno do košíku!",
        he: "נוסף לעגלה!",
        el: "Προστέθηκε στο καλάθι!",
        am: "Добавлено в корзину!",
        ge: "Добавлено в корзину!",
        ro: "Adăugat în coș!",
        kz: "Себетке қосылды!",
        uk: "Додано до кошику!",
      },
      {
        original: "ОК",
        context: "",
        en: "OK",
        "pt-BR": "OK",
        es: "Vale",
        "zh-CN": "确定",
        de: "OK",
        it: "OK",
        fr: "OK",
        pl: "OK",
        lt: "OK",
        lv: "OK",
        bg: "OK",
        cs: "OK",
        he: "אישור",
        el: "ΟΚ",
        am: "OK",
        ge: "OK",
        ro: "Ok",
        kz: "OK",
        uk: "ОК",
      },
      {
        original: "Открыть корзину",
        context:
          "По клику появляется окошко с корзиной. То есть тут не переход на новую страницу, а показ окна.",
        en: "View cart",
        "pt-BR": "Ver carrinho",
        es: "Ver carrito",
        "zh-CN": "查看购物车",
        de: "Warenkorb anzeigen",
        it: "Guarda il carrello",
        fr: "Voir le panier",
        pl: "Wyświetl koszyk",
        lt: "Открыть корзину",
        lv: "Открыть корзину",
        bg: "Открыть корзину",
        cs: "Zobrazit košík",
        he: "הצג עגלה",
        el: "Προβολή καλαθιού",
        am: "Открыть корзину",
        ge: "Открыть корзину",
        ro: "Vizualizare coș",
        kz: "Себетті көру",
        uk: "Переглянути кошик",
      },
      {
        original: "Да",
        context: "",
        en: "Yes",
        "pt-BR": "Sim",
        es: "Sí",
        "zh-CN": "是",
        de: "Ja",
        it: "Sì",
        fr: "Oui",
        pl: "Tak",
        lt: "Да",
        lv: "Да",
        bg: "Да",
        cs: "Ano",
        he: "כן",
        el: "Ναι",
        am: "Да",
        ge: "Да",
        ro: "Da",
        kz: "Иә",
        uk: "Так",
      },
      {
        original: "Нет",
        context: "",
        en: "No",
        "pt-BR": "Não",
        es: "No",
        "zh-CN": "否",
        de: "Nein",
        it: "No",
        fr: "Non",
        pl: "Nie",
        lt: "Нет",
        lv: "Нет",
        bg: "Нет",
        cs: "Ne",
        he: "לא",
        el: "Όχι",
        am: "Нет",
        ge: "Нет",
        ro: "Nu",
        kz: "Жоқ",
        uk: "Ні",
      },
      {
        original: "Загрузка...",
        context: "С компьютера на сервер",
        en: "Loading...",
        "pt-BR": "Carregando...",
        es: "Cargando...",
        "zh-CN": "载入中…",
        de: "Wird geladen ...",
        it: "Caricamento...",
        fr: "Chargement...",
        pl: "Ładowanie...",
        lt: "Загрузка...",
        lv: "Загрузка...",
        bg: "Загрузка...",
        cs: "Načítání...",
        he: "טוען...",
        el: "Φόρτωση...",
        am: "Загрузка...",
        ge: "Загрузка...",
        ro: "Încărcare...",
        kz: "Жүктелуде...",
        uk: "Завантаження...",
      },
      {
        original: "Файл загружен",
        context: "",
        en: "File loaded",
        "pt-BR": "Arquivo carregado",
        es: "Archivo cargado",
        "zh-CN": "文件已载入",
        de: "Datei geladen",
        it: "File caricato",
        fr: "Fichier chargé",
        pl: "Załadowano plik",
        lt: "Файл загружен",
        lv: "Файл загружен",
        bg: "Файл загружен",
        cs: "Soubor načten",
        he: "הקובץ נטען",
        el: "Έγινε φόρτωση αρχείου",
        am: "Файл загружен",
        ge: "Файл загружен",
        ro: "Fișierul a fost încărcat",
        kz: "Файл жүктелді",
        uk: "Файл завантажено",
      },
      {
        original: "Ошибка загрузки!",
        context: "",
        en: "Loading error",
        "pt-BR": "Erro ao carregar",
        es: "Error de carga",
        "zh-CN": "载入出错",
        de: "Fehler beim Laden",
        it: "Errore di caricamento",
        fr: "Erreur de chargement",
        pl: "Błąd podczas ładowania",
        lt: "Ошибка загрузки!",
        lv: "Ошибка загрузки!",
        bg: "Ошибка загрузки!",
        cs: "Chyba při načítání",
        he: "שגיאת טעינה",
        el: "Σφάλμα φόρτωσης",
        am: "Ошибка загрузки!",
        ge: "Ошибка загрузки!",
        ro: "Eroare la încărcare",
        kz: "Жүктеу қателігі",
        uk: "Помилка завантаження",
      },
      {
        original: "Выберите файл...",
        context: "",
        en: "Select a file...",
        "pt-BR": "Selecione um arquivo...",
        es: "Seleccionar un archivo...",
        "zh-CN": "选择一个文件…",
        de: "Wählen Sie eine Datei ...",
        it: "Seleziona un file...",
        fr: "Sélectionnez un fichier...",
        pl: "Wybierz plik...",
        lt: "Выберите файл...",
        lv: "Выберите файл...",
        bg: "Выберите файл...",
        cs: "Vyber soubor...",
        he: "בחר קובץ...",
        el: "Επιλέξτε ένα αρχείο...",
        am: "Выберите файл...",
        ge: "Выберите файл...",
        ro: "Selectaţi un fişier...",
        kz: "Файлды таңдаңыз...",
        uk: "Оберіть файл...",
      },
    ]),
    (creatium.modals = {
      list: [],
      isChild: function (e, t) {
        t = t.data("modal").$parent;
        return !!t.length && (t[0] === e[0] || creatium.modals.isChild(e, t));
      },
      attach: function (e) {
        var t = e.data("modal");
        t.attached ||
          ((t.$parent = creatium.closest(t.$el.parent(), ".modal")),
          (t.$node = creatium.closest(t.$el, ".node")),
          (t.$section = creatium.closest(t.$el, ".node.section")),
          t.$el.before(
            '<span class="modal-link" data-uid="' + t.uid + '"></span>'
          ),
          t.$el.appendTo(".area-wrapper"),
          t.$el.html(creatium.async.modals[t.uid]),
          t.$el.css("display", "block"),
          creatium.init.trigger(t.el),
          t.$el.css("display", ""),
          (t.$back = t.$el.children(".modal-back")),
          (t.$dialog = t.$el.children(".modal-dialog")),
          (t.$root = t.$el
            .find("[cr-modal-root]")
            .filter(function () {
              return $(this).closest(".modal")[0] === t.$el[0];
            })
            .first()),
          (t.$spacer = t.$el
            .find("[cr-modal-spacer]")
            .filter(function () {
              return $(this).closest(".modal")[0] === t.$el[0];
            })
            .first()),
          (t.$arrow = t.$el
            .find("[cr-modal-arrow]")
            .filter(function () {
              return $(this).closest(".modal")[0] === t.$el[0];
            })
            .first()),
          (t.$close = t.$el.find("[cr-modal-close]").filter(function () {
            return $(this).closest(".modal")[0] === t.$el[0];
          })),
          t.$close.on("click", function () {
            creatium.modals.hide(t.$el);
          }),
          t.$el.on("click", function (e) {
            t.clicking ||
              (0 === $(e.target).closest(t.$dialog).length &&
                creatium.modals.hide(t.$el));
          }),
          t.$parent &&
            t.$parent.on("hide", function () {
              creatium.modals.hide(t.$el);
            }),
          (t.attached = !0));
      },
      show: function (e, t) {
        var i,
          a = e.data("modal");
        creatium.api.initialized
          ? (creatium.modals.attach(e),
            a.$el.triggerHandler("before-show"),
            !0 !== a.api_prevent
              ? (a.$root.hasClass("is-hiding") &&
                  a.$el.triggerHandler("force-hide"),
                (a.$button = t),
                (i = _.last(creatium.modals.list)),
                creatium.modals.list.push(a),
                (a.zindex = i ? i.zindex + 1 : 810),
                e.addClass("active").css("z-index", a.zindex),
                "popover" !== a.type &&
                  ($(creatium.scroll.snapping ? ".area-wrapper" : "body").css(
                    "overflow",
                    "hidden"
                  ),
                  a.$back.fadeIn(a.duration)),
                setTimeout(function () {
                  a.$root.addClass("is-active"),
                    setTimeout(creatium.lazy.update, a.duration);
                }, 1),
                a.$section
                  .off("fixation-change.modals")
                  .on("fixation-change.modals", creatium.modals.reposition),
                creatium.modals.reposition(),
                a.$el.triggerHandler("show"),
                $(creatium).triggerHandler("modal-hide", [a]),
                $(creatium).triggerHandler("api-popup-show", [a]))
              : delete a.api_prevent)
          : $(creatium).on("api-init", function () {
              creatium.modals.show(e, t);
            });
      },
      showById: function (e) {
        creatium.modals.show($('.modal[data-id="' + e + '"]:first'));
      },
      hide: function (t) {
        var e, i, a;
        (e =
          void 0 === t
            ? _.last(creatium.modals.list)
            : creatium.modals.list.find(function (e) {
                return e.$el[0] === t[0];
              })) &&
          (e.$el.triggerHandler("before-hide"),
          !0 !== e.api_prevent
            ? ((creatium.modals.list = _.without(creatium.modals.list, e)),
              e.$root.addClass("is-hiding"),
              e.$back.fadeOut(e.duration),
              (i = function () {
                e.$el.removeClass("active"),
                  e.$root.removeClass("is-active is-hiding"),
                  "popover" !== e.type &&
                    0 ===
                      creatium.modals.list.filter(function (e) {
                        return "popover" !== e.type;
                      }).length &&
                    $(creatium.scroll.snapping ? ".area-wrapper" : "body").css(
                      "overflow",
                      ""
                    ),
                  clearTimeout(a),
                  e.$el.off("force-hide", i);
              }),
              e.$el.on("force-hide", i),
              (a = setTimeout(i, e.duration)),
              e.$el.triggerHandler("hide"),
              $(creatium).triggerHandler("modal-hide", [e]),
              $(creatium).triggerHandler("api-popup-hide", [e]))
            : delete e.api_prevent);
      },
      reposition: function () {
        var r = document.body.clientWidth,
          n = window.innerHeight;
        creatium.modals.list.forEach(function (e) {
          var t, i, a;
          e.attached &&
            ("sidemenu" === e.type &&
              ((t = e.$spacer.outerHeight()),
              (i = e.$dialog.outerHeight()) < n
                ? e.$spacer.height((t += n - i))
                : n < i &&
                  20 < t &&
                  e.$spacer.height((t = (t -= i - n) < 20 ? 20 : t))),
            "popover" === e.type &&
              ((i = e.$button.offset()),
              e.$section.hasClass("fixed") ||
              e.$section.hasClass("section-layout")
                ? (e.$el.css("position", "fixed"),
                  e.$el.css(
                    "top",
                    i.top - $(document).scrollTop() + e.$button.outerHeight()
                  ))
                : (e.$el.css("position", "absolute"),
                  e.$el.css("top", i.top + e.$button.outerHeight())),
              e.$el.css(
                "margin-left",
                i.left +
                  e.$button.outerWidth() / 2 -
                  e.$el.outerWidth() / 2 -
                  cr.layout._left_current
              ),
              (t = e.$dialog.offset().left),
              (i = e.$dialog.outerWidth()),
              t < 0
                ? (e.$el.css("margin-left", "-=" + (a = t - 10)),
                  e.$arrow.css("margin-left", 2 * a))
                : r < t + i
                ? (e.$el.css("margin-left", "-=" + (a = t + i - r + 10)),
                  e.$arrow.css("margin-left", 2 * a))
                : e.$arrow.css("margin-left", 0)));
        });
      },
      hideAll: function () {
        for (; creatium.modals.list.length; ) creatium.modals.hide();
      },
    }),
    creatium.init.local(function (e) {
      e.find(".modal").each(function () {
        var e = $(this),
          t = e.children("[data-uid]"),
          i = {
            uid: t.attr("data-uid"),
            type: e.attr("data-type"),
            duration: +e.attr("data-duration"),
            trigger: e.attr("data-trigger"),
            el: e[0],
            $el: e,
            zindex: null,
            parent: null,
            $button: null,
            $back: null,
            $dialog: null,
            $root: null,
            $spacer: null,
            $arrow: null,
            $close: null,
            $parent: null,
            $section: null,
            attached: !1,
            prevent_hide: !1,
          };
        t.detach(), e.attr("data-uid", i.uid), e.data("modal", i);
      }),
        e
          .find(
            ".btn[data-modal], .btn-meta[data-modal], .btn-modal[data-modal]"
          )
          .each(function () {
            var i = $(this),
              e = i.attr("data-modal"),
              t = i.closest(".node"),
              a = (t = t.hasClass("widget-field")
                ? t.closest(".node[data-form]")
                : t)
                .find('.modal[data-name="' + e + '"]')
                .data("modal");
            a.$el
              .on("show", function () {
                i.addClass("active");
              })
              .on("hide", function () {
                i.removeClass("active");
              }),
              creatium.lazy.add(i, function () {
                var t;
                "popover" === a.type && "hover" === a.trigger
                  ? ((t = !1),
                    i.on("mouseenter touchstart", function (e) {
                      i.hasClass("active") ||
                        ((t = "touchstart" === e.type),
                        creatium.modals.show(a.$el, i));
                    }),
                    i.on("click", function (e) {
                      return t
                        ? ((t = !1), void e.stopPropagation())
                        : void (
                            i.hasClass("active") ||
                            (setTimeout(function () {
                              creatium.modals.show(a.$el, i);
                            }, 1),
                            e.preventDefault())
                          );
                    }))
                  : i.on("click", function (e) {
                      i.hasClass("active") ||
                        (setTimeout(function () {
                          creatium.modals.show(a.$el, i);
                        }, 1),
                        e.preventDefault());
                    });
              });
          });
    }),
    creatium.init.global(function () {
      var e = location.href.match(/#modal-([a-z0-9]+)/);
      e && creatium.modals.showById(e[1]),
        $(document).on("click", 'a[href*="#modal-"]', function (e) {
          e.isDefaultPrevented() ||
            ((e = $(this)
              .attr("href")
              .match(/#modal-([a-z0-9]+)/)) &&
              creatium.modals.showById(e[1]));
        }),
        $(document).on(
          "click",
          '.btn[data-action="close"], .btn-meta[data-action="close"]',
          function (e) {
            var t = $(this).closest(".modal");
            creatium.modals.hide(t);
          }
        ),
        $(document).keyup(function (e) {
          27 === e.keyCode && creatium.modals.hide();
        }),
        $(document).on("mousedown", function (e) {
          creatium.modals.list.forEach(function (e) {
            e.clicking = !1;
          }),
            $(e.target)
              .closest(".modal-dialog")
              .each(function () {
                $(this).closest(".modal").data("modal").clicking = !0;
              });
        }),
        $(document).on("click", function (e) {
          var i = $(e.target);
          0 !== creatium.modals.list.length &&
            creatium.modals.list.forEach(function (e) {
              var t;
              "popover" === e.type &&
                (i.closest(e.$dialog).length ||
                  e.clicking ||
                  ((t = i.closest(".modal")).length &&
                    creatium.modals.isChild(e.$el, t)) ||
                  i.closest(".swal-overlay, .fancybox-container").length ||
                  creatium.modals.hide(e.$el));
            });
        }),
        $(document).on("mousemove", function (e) {
          var i = $(e.target);
          0 !== creatium.modals.list.length &&
            creatium.modals.list.forEach(function (e) {
              var t;
              "popover" === e.type &&
                "hover" === e.trigger &&
                (i.closest(e.$button).length ||
                  ((t = i.closest(".modal")).length &&
                    creatium.modals.isChild(e.$el, t)) ||
                  i.closest(e.$el).length ||
                  creatium.modals.hide(e.$el));
            });
        }),
        $(document).off("click.fb-start"),
        setTimeout(function e() {
          creatium.modals.reposition(), setTimeout(e, 500);
        }, 100);
    }),
    (creatium.cart = { list: creatium.store.get("cart") || [] }),
    (creatium.cart.getPrice = function (e) {
      var t = e.match(/\d/g);
      if (!t) return 0;
      var i = e.indexOf(t[0]),
        a = e.lastIndexOf(t[t.length - 1]),
        r = (e[i], e[a], "-" === e[i - 1] ? -1 : 1),
        e = e.substring(i, a + 1),
        i = 0 <= (e = e.replace(/[^\d\.\,]+/g, "")).indexOf("."),
        a = 0 <= e.indexOf(",");
      return (
        (i || a
          ? (t = e.match(/(.+)[\,\.](\d\d)$/))
            ? +t[1].replace(/[\,\.]/g, "") + +("0." + t[2])
            : +e.replace(/[\,\.]/g, "")
          : +e) * r
      );
    }),
    (creatium.cart.getCurrency = function (e) {
      var t = e.match(/\d/g);
      if (!t) return "%s%";
      var i = (e = (e = e.replace(/\&nbsp\;/g, " ")).match(/[\:\-]/)
          ? e.replace(/.*[\:\-]\s*(.*)/, "$1")
          : e).indexOf(t[0]),
        t = e.lastIndexOf(t[t.length - 1]),
        t = (e[i], e[t], e.substring(i, t + 1));
      return e.replace(t, "%s%");
    }),
    (creatium.cart.add = function (e, t) {
      var n = _.filter(e, { type: "title" })[0],
        o = _.filter(e, { type: "price" })[0],
        l = _.filter(e, { type: "amount" })[0],
        s = (_.filter(e, { type: "photo" })[0], null);
      return (
        !0 !== t &&
          _.each(creatium.cart.list, function (e, t) {
            var i = _.filter(e, { type: "title" })[0],
              a = _.filter(e, { type: "price" })[0],
              r = _.filter(e, { type: "amount" })[0];
            n.value === i.value &&
              o.value === a.value &&
              ((r.value += +l.value), (s = e));
          }),
        null === s &&
          (creatium.cart.list.push(e),
          $(creatium).triggerHandler("api-cart-item-add", [e])),
        $(creatium).triggerHandler("cart-change"),
        s || e
      );
    }),
    (creatium.cart.remove = function (e) {
      creatium.cart.list.splice(creatium.cart.list.indexOf(e), 1),
        $(creatium).triggerHandler("api-cart-item-remove", [e]),
        $(creatium).triggerHandler("cart-change");
    }),
    (creatium.cart.setAmount = function (e, t) {
      if (0 === t) return creatium.cart.remove(e);
      (_.filter(e, { type: "amount" })[0].value = t),
        $(creatium).triggerHandler("cart-change");
    }),
    (creatium.cart.empty = function () {
      creatium.cart.list.splice(0, creatium.cart.list.length),
        $(creatium).triggerHandler("cart-change");
    }),
    creatium.init.global(function () {
      $(creatium).on("cart-change", function () {
        creatium.store.set("cart", creatium.cart.list);
      }),
        $(document.body).on("click", '[data-action="addtocart"]', function (e) {
          e.preventDefault();
          var t = $(e.currentTarget),
            e = cr.closest(t, "[data-item]");
          e.length
            ? ((t = _.cloneDeep(e.data("item"))),
              (e = (e = e.find('[data-role="setamount"]')).length
                ? {
                    name: creatium.l10n("Количество"),
                    type: "amount",
                    value: +e.val() || 1,
                  }
                : {
                    name: creatium.l10n("Количество"),
                    type: "amount",
                    value: 1,
                  }),
              t.push(e),
              creatium.cart.add(t),
              creatium.msg_success(
                creatium.l10n("Добавлено в корзину!"),
                null,
                {
                  button: creatium.l10n("ОК"),
                  content: {
                    element: "a",
                    attributes: {
                      href: "/cart",
                      innerText: creatium.l10n("Открыть корзину"),
                    },
                  },
                }
              ))
            : creatium.msg_error(
                creatium.l10n("Товар не найден"),
                creatium.l10n("Кнопка должна находиться в карточке товара.")
              );
        });
    }),
    (creatium.isRetina = function () {
      return (
        "boolean" == typeof creatium.isRetina.cache ||
          (1 < window.devicePixelRatio
            ? (creatium.isRetina.cache = !0)
            : window.matchMedia &&
              window.matchMedia(
                "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)"
              ).matches
            ? (creatium.isRetina.cache = !0)
            : (creatium.isRetina.cache = !1)),
        creatium.isRetina.cache
      );
    }),
    $(window).on("resize", function (e) {
      var t = !1,
        i = creatium.getScreen();
      i !== creatium.screen &&
        (document.body.classList.remove("screen-" + creatium.screen),
        (creatium.screen = i),
        document.body.classList.add("screen-" + creatium.screen),
        (t = !0),
        $("script[data-adaptive-exclude]").each(function () {
          var e = $(this),
            t = e.attr("data-adaptive-exclude"),
            i = e.attr("data-adaptive-uid");
          0 <= t.indexOf(creatium.screen) ||
            (creatium._adaptive_sections &&
              creatium._adaptive_sections[i] &&
              ((e = $(creatium._adaptive_sections[i]).insertAfter(e)),
              (creatium._adaptive_sections[i] = null),
              creatium.init.trigger(e[0])));
        }));
      i = creatium.isLayoutMobile();
      i !== creatium.layout.mobile &&
        (i
          ? document.body.classList.add("layout-mobile")
          : document.body.classList.remove("layout-mobile"),
        (t = !0),
        (creatium.layout.mobile = i)),
        t && $(creatium).triggerHandler("screen-change");
    }),
    (creatium.lazy = {
      _observer: window.IntersectionObserver
        ? new IntersectionObserver(function (e) {
            e.forEach(function (e) {
              e.isIntersecting && creatium.lazy.trigger(e.target);
            });
          }, {})
        : {
            observe: function (e) {
              creatium.lazy.trigger(e);
            },
            unobserve: function (e) {},
          },
      add: function (e, t) {
        e.each(function () {
          var e = $(this);
          void 0 === e.data("lazy-state")
            ? e
                .addClass("lazy")
                .data("lazy-cb", function () {
                  try {
                    t(e);
                  } catch (e) {
                    console.error(e);
                  }
                })
                .data("lazy-state", "wait")
            : creatium.lazy.then(e, t),
            creatium.lazy._observer.observe(this);
        });
      },
      then: function (e, t) {
        e.each(function () {
          var e = $(this);
          "done" !== e.data("lazy-state")
            ? e.one("lazy-trigger", function () {
                t(e);
              })
            : t(e);
        });
      },
      trigger: function (e) {
        creatium.lazy._observer.unobserve(e);
        e = $(e);
        !1 !== e.hasClass("lazy") &&
          (e.removeClass("lazy"),
          e.data("lazy-cb") instanceof Function &&
            (e.data("lazy-cb")(e),
            e.triggerHandler("lazy-trigger"),
            e.data("lazy-state", "done")));
      },
      force: function (e) {
        (e = e || $(".area")).find(".lazy").each(function () {
          creatium.lazy.trigger(this);
        });
      },
      transferImage: function (e) {
        return (
          (e = e
            .replace(
              /\/\/(u[\d]+)\.(platformalp\.ru|filesonload\.ru|plpstatic\.ru)\//,
              "//i.1.creatium.io/plp/$1.plpstatic.ru/"
            )
            .replace(
              /\/\/([\w\d.]+)\.lpcdn\.site\//,
              "//i.1.creatium.io/plp/$1.lpcdn.site/"
            )
            .replace(
              "//437e81e1-5ed1-4d53-bed7-e6f8d97dcc9b.selcdn.net/",
              "//i.1.creatium.io/"
            )
            .replace(
              /\/\/s\.(platformalp\.ru|filesonload\.ru|plpstatic\.ru)\//,
              "//static.creatium.io/"
            )
            .replace(
              "//i.1.creatium.io/disk/static/",
              "//static.creatium.io/"
            )),
          "int" === creatium.region &&
            (e = (e = (e = (e = e.replace(
              "//i.1.creatium.io/plp/",
              "//img2.creatium.app/plp/"
            )).replace(
              "//i.1.creatium.io/",
              "//img2.creatium.app/plp/i.1.creatium.io/"
            )).replace(
              "//img.creatium.app/",
              "//img2.creatium.app/plp/i.1.creatium.io/"
            )).replace("//static.creatium.io/", "")),
          (e = (e =
            creatium.misc && creatium.misc.cdn_host
              ? "int" === creatium.region
                ? e.replace(
                    "//img2.creatium.app/",
                    "//" + creatium.misc.cdn_host + "/"
                  )
                : e.replace(
                    "//i.1.creatium.io/",
                    "//" + creatium.misc.cdn_host + "/"
                  )
              : e).replace(
            /(\/\/.+creatium.+\/.+)\/\d+x\d+(?:q\d)\/(.+)$/,
            "$1/$2"
          ))
        );
      },
      isScaleImage: function (e) {
        return (
          !/.+\.gif$/.test(e) &&
          (!!/\/\/i\.\d+\.creatium\.io/.test(e) ||
            !!/\/\/img\.vejio\.su/.test(e) ||
            !!/\/\/img\.creatium\.app/.test(e))
        );
      },
      getScaleImageUrl: function (e, t) {
        creatium.isRetina() && ((t.width2 *= 2), (t.height2 *= 2));
        var i = t.width1,
          a = t.height1;
        t.width2 > i &&
          ((t.height2 = (i / t.width2) * t.height2), (t.width2 = i)),
          t.height2 > a &&
            ((t.width2 = (a / t.height2) * t.width2), (t.height2 = a));
        (i = Math.round(t.width2 || 0)),
          (a = Math.round(t.height2 || 0)),
          (t = t.quality || 8);
        return (
          (t = 0 < e.indexOf(".svg") ? i + "x" + a : i + "x" + a + "q" + t),
          e.replace(/(.+)\/(.+)/, "$1/" + t + "/$2")
        );
      },
    }),
    creatium.init.local(function (t) {
      [
        "filesonload.ru",
        "plpstatic.ru",
        "platformalp.ru",
        "creatium.io",
      ].forEach(function (e) {
        [
          ["a", "href"],
          ["img", "src"],
          ["div", "style"],
        ].forEach(function (i) {
          t.find(i[0] + "[" + i[1] + '*="' + e + '"]').each(function () {
            var e = $(this).attr(i[1]),
              t = creatium.lazy.transferImage(e);
            t !== e && $(this).attr(i[1], t);
          });
        });
      }),
        creatium.lazy.add(t.find("[data-lazy-iframe]"), function (e) {
          e.attr("src", e.attr("data-lazy-iframe")),
            e.removeAttr("data-lazy-iframe"),
            e.addClass("lazy-loading"),
            e
              .on("load", function () {
                e.removeClass("lazy-loading"), e.trigger("lazyload");
              })
              .on("error", function () {
                e.removeClass("lazy-loading"), e.trigger("lazyerror");
              });
        }),
        creatium.lazy.add(t.find("[data-lazy-video]"), function (e) {
          var t,
            i = e.attr("data-service"),
            a = e.attr("data-lazy-video"),
            r = e.attr("data-params");
          "youtube" === i
            ? (t =
                a.match(/[?&]v=([a-zA-Z0-9-_]+)/) ||
                a.match(/youtu\.be\/([a-zA-Z0-9-_]+)/)) &&
              e.attr("src", "//www.youtube.com/embed/" + t[1] + r)
            : "vimeo" === i &&
              (t = a.match(/\/([0-9]+)/)) &&
              e.attr("src", "//player.vimeo.com/video/" + t[1] + r),
            e.removeAttr("data-lazy-video"),
            e.removeAttr("data-service"),
            e.removeAttr("data-params"),
            e.addClass("lazy-loading"),
            e
              .on("load", function () {
                e.removeClass("lazy-loading"), e.trigger("lazyload");
              })
              .on("error", function () {
                e.removeClass("lazy-loading"), e.trigger("lazyerror");
              });
        }),
        creatium.lazy.add(t.find("[data-lazy-image]"), function e(t) {
          var i,
            a,
            r,
            n = decodeURI(t.data("lazy-image")).split("#"),
            o = creatium.lazy.transferImage(n[0]),
            n = n[1] && JSON.parse(n[1]);
          if (
            (n &&
              creatium.lazy.isScaleImage(o) &&
              t.data("lazy-image_resize") &&
              ((i = {
                width1: +(l = n.size)[0],
                width2: +l[0],
                height1: +l[1],
                height2: +l[1],
                quality: n.quality,
              }),
              "css-width" === (l = t.data("lazy-image_detect"))
                ? ((i.width2 = t.width()),
                  i.width2 < i.width1 &&
                    (i.height2 = (i.width2 / i.width1) * i.height1))
                : "css-width-height" === l
                ? ((i.width2 = t.width()), (i.height2 = t.height()))
                : "css-max-height" === l
                ? ((a = parseInt(t.css("max-height"))),
                  i.height1 > a
                    ? ((i.height2 = a), (i.width2 = (a / i.height1) * i.width1))
                    : t.css("max-height", i.height2))
                : "css-max-width-max-height" === l
                ? ((a = parseInt(t.css("max-width"))),
                  (r = parseInt(t.css("max-height"))),
                  i.width2 > a &&
                    ((i.width2 = a), (i.height2 = (a / i.width1) * i.height1)),
                  i.height2 > r &&
                    ((i.width2 = (r / i.height2) * i.width2), (i.height2 = r)),
                  i.width2 < a && t.css("max-width", i.width2),
                  i.height2 < r && t.css("max-height", i.height2))
                : "css-width-max-height" === l
                ? ((i.width2 = t.width()),
                  i.width2 < i.width1 &&
                    (i.height2 = (i.width2 / i.width1) * i.height1),
                  (r = parseInt(t.css("max-height"))),
                  i.height2 > r
                    ? (i.height2 = r)
                    : t.css("max-height", i.height2))
                : "fill-width" === l &&
                  ((i.width2 = t.parent().width()),
                  (i.height2 = (i.width2 / i.width1) * i.height1)),
              (o = creatium.lazy.getScaleImageUrl(o, i))),
            i)
          ) {
            var l = t.data("last-scale");
            if (l) {
              if (!(i.width2 > l.width2 || i.height2 > l.height2)) return;
              t.data("last-scale", i);
            } else
              t.data("last-scale", i),
                $(creatium).on("screen-change", function () {
                  creatium.lazy.add(t, e);
                });
          }
          t.data(),
            t.removeAttr("data-lazy-image"),
            t.removeAttr("data-lazy-image_resize"),
            t.removeAttr("data-lazy-image_detect"),
            t.addClass("lazy-loading");
          var s = $("<img>")
            .attr("src", o)
            .on("load", function () {
              t.attr("src", o),
                t.removeClass("lazy-loading"),
                t.trigger("lazyload"),
                "0px" === t[0].style.getPropertyValue("--width").trim() &&
                  ((this.style.position = "absolute"),
                  (this.style.pointerEvents = "none"),
                  (this.style.visibility = "hidden"),
                  (this.style.left = "-10000px"),
                  document.body.appendChild(this),
                  t[0].style.setProperty("--width", this.clientWidth + "px"),
                  t[0].style.setProperty("--height", this.clientHeight + "px"),
                  t[0].style.setProperty(
                    "--ratio",
                    this.clientWidth / this.clientHeight || 1
                  ),
                  document.body.removeChild(this));
            })
            .on("error", function () {
              $("<img>")
                .attr("src", o)
                .on("load", function () {
                  s.triggerHandler("load");
                })
                .on("error", function () {
                  t.removeClass("lazy-loading"), t.trigger("lazyerror");
                });
            });
        }),
        creatium.lazy.add(t.find("[data-lazy-bgimage]"), function e(t) {
          var i,
            a = decodeURI(t.data("lazy-bgimage")).split("#"),
            r = creatium.lazy.transferImage(a[0]),
            n = a[1] && JSON.parse(a[1]);
          if (
            (n &&
              creatium.lazy.isScaleImage(r) &&
              t.data("lazy-bgimage_resize") &&
              ((o = n.size),
              (i = {
                retina: "true" !== t.data("lazy-bgimage_nohd"),
                width1: +o[0],
                width2: +o[0],
                height1: +o[1],
                height2: +o[1],
                quality: +n.quality,
              }),
              (a = t.get(0).clientWidth),
              (o = t.get(0).clientHeight),
              "cover" === (n = t.css("background-size"))
                ? (i.width1 > a &&
                    ((i.width2 = a), (i.height2 = (a / i.width1) * i.height1)),
                  i.height2 < o &&
                    ((i.height2 = o), (i.width2 = (o / i.height1) * i.width1)))
                : "contain" === n &&
                  (i.width2 > a &&
                    ((i.width2 = a), (i.height2 = (a / i.width1) * i.height1)),
                  i.height2 > o &&
                    ((i.height2 = o), (i.width2 = (o / i.height1) * i.width1))),
              (r = creatium.lazy.getScaleImageUrl(r, i))),
            i)
          ) {
            var o = t.data("last-scale");
            if (o) {
              if (!(i.width2 > o.width2 || i.height2 > o.height2)) return;
              t.data("last-scale", i);
            } else
              t.data("last-scale", i),
                $(creatium).on("screen-change", function () {
                  creatium.lazy.add(t, e);
                });
          }
          t.data(),
            t.removeAttr("data-lazy-bgimage"),
            t.removeAttr("data-lazy-bgimage_resize"),
            t.removeAttr("data-lazy-bgimage_nohd"),
            t.addClass("lazy-loading");
          var l = $("<img>")
            .attr("src", r)
            .on("load", function () {
              t.css("background-image", 'url("' + r + '")'),
                t.removeClass("lazy-loading"),
                t.trigger("lazyload");
            })
            .on("error", function () {
              $("<img>")
                .attr("src", r)
                .on("load", function () {
                  l.triggerHandler("load");
                })
                .on("error", function () {
                  t.removeClass("lazy-loading"), t.trigger("lazyerror");
                });
            });
        }),
        creatium.lazy.add(t.find("[data-lazy-all], .lazy-all"), function (e) {
          creatium.lazy.force(e);
        }),
        $(window).on("load", function () {
          0 < location.href.indexOf("debug-nolazyforce=1") ||
            creatium.syncInterval(function () {
              var e = $(
                ".lazy-loading[data-lazy-bgimage], .lazy-loading[data-lazy-image]"
              );
              e.length < 5 &&
                ((e = 5 - e.length),
                $(
                  ".lazy[data-lazy-bgimage]:visible, .lazy[data-lazy-image]:visible"
                )
                  .slice(0, e)
                  .each(function () {
                    creatium.lazy.trigger(this);
                  }));
            }, 250);
        });
    }),
    creatium.init.global(function () {
      (creatium.msg_error = function (a, r, n) {
        return new Promise(function e(t, i) {
          window.swal
            ? t(
                swal(
                  _.extend(n || {}, {
                    title: a,
                    text: r || null,
                    icon: "error",
                    className: "swal-modal--error",
                  })
                ).then(function () {
                  $(creatium).triggerHandler("msg-close");
                })
              )
            : setTimeout(function () {
                e(t, i);
              }, 50);
        });
      }),
        (creatium.msg_success = function (a, r, n) {
          return new Promise(function e(t, i) {
            window.swal
              ? t(
                  swal(
                    _.extend(n || {}, {
                      title: a,
                      text: r || null,
                      icon: "success",
                      className: "swal-modal--success",
                    })
                  ).then(function () {
                    $(creatium).triggerHandler("msg-close");
                  })
                )
              : setTimeout(function () {
                  e(t, i);
                }, 50);
          });
        }),
        (creatium.msg_info = function (a, r, n) {
          return new Promise(function e(t, i) {
            window.swal
              ? t(
                  swal(
                    _.extend(n || {}, {
                      title: a,
                      text: r || null,
                      icon: "info",
                      className: "swal-modal--info",
                    })
                  ).then(function () {
                    $(creatium).triggerHandler("msg-close");
                  })
                )
              : setTimeout(function () {
                  e(t, i);
                }, 50);
          });
        });
    }),
    creatium.init.local(function (e) {
      e.find("[data-ym_goal]").each(function () {
        function i() {
          _.each(_.keys(window), function (e) {
            0 === e.indexOf("yaCounter") && window[e].reachGoal(t);
          });
        }
        var a = $(this),
          r = _.uniqueId("goal"),
          t = a.data("ym_goal");
        a.on("click", function () {
          var e = a.hasClass("submit") && a.find(":submit").length,
            t = "send" === a.attr("data-action");
          e || t
            ? $(this)
                .closest("form.form, [data-form]")
                .off("." + r)
                .one("submit-success." + r, function () {
                  i();
                })
            : i();
        });
      }),
        e.find("[data-ga_category]").each(function () {
          function i() {
            window.ga && ga("send", "event", t, e),
              window.gtag &&
                gtag("event", "generate_lead", {
                  event_category: t,
                  event_action: e,
                });
          }
          var a = $(this),
            r = _.uniqueId("goal"),
            e = a.data("ga_action"),
            t = a.data("ga_category");
          a.on("click", function () {
            var e = a.hasClass("submit") && a.find(":submit").length,
              t = "send" === a.attr("data-action");
            e || t
              ? $(this)
                  .closest("form.form, [data-form]")
                  .off("." + r)
                  .one("submit-success." + r, function () {
                    i();
                  })
              : i();
          });
        });
    }),
    $(function () {
      var d = 0,
        u = {
          error: creatium.l10n("Не удалось отправить форму!"),
          validate: creatium.l10n("Неправильно заполнены поля:"),
          interval: creatium.l10n(
            "Пожалуйста, повторите отправку через пару секунд."
          ),
          required: creatium.l10n("Поле «%field%» обязательно для заполнения."),
          email: creatium.l10n(
            "Поле «%field%» должно содержать ваш настоящий e-mail адрес."
          ),
          phone: creatium.l10n(
            "Поле «%field%» должно содержать правильный номер телефона."
          ),
          number: creatium.l10n(
            "Поле «%field%» должно быть правильным числом."
          ),
        },
        m = creatium.l10n("Да"),
        f = creatium.l10n("Нет");
      _.defer(function () {
        creatium.init.local(function (e) {
          e.find("form.form").each(function () {
            var n = $(this);
            n.on("submit-error", function () {
              $(creatium).triggerHandler("submit-error");
            }),
              n.on("submit-success", function () {
                $(creatium).triggerHandler("submit-success"),
                  creatium.store.set("is_converted", !0);
              });
            var o = n.data("form"),
              e = creatium.closest(n, "[data-item]"),
              t = _.cloneDeep(e.data("item")),
              l = creatium.closest(n, ".node.widget-cart").length
                ? creatium.cart.list
                : null,
              e = n.data("fields");
            [t].concat(l).forEach(function (e) {
              var t = _.filter(e, { type: "price" })[0];
              t &&
                (((t = _.cloneDeep(t)).type = "price_float"),
                (t.value = plp.cart.getPrice(t.value)),
                e.push(t));
            });
            var s = {
                hit: {
                  page_id: creatium.page_id,
                  ab_id: creatium.content_id,
                  visit_id: creatium.visit_id,
                  redoken: creatium.redoken,
                  referer: document.referrer,
                  uri: location.pathname + location.search,
                },
                form: o,
                item: t || [],
                items: l || [],
                fields: e,
              },
              a = n.find(".field").each(function (e) {
                var a,
                  r = $(this),
                  e = s.fields[e];
                "radio-list" === e.type &&
                  r.find("input").prop("name", _.uniqueId("radio")),
                  "textarea" === e.type &&
                    r.find("textarea").val(function (e, t) {
                      return $.trim(t);
                    }),
                  "file" === e.type &&
                    (a = function () {
                      r.find(":file").on("change", function () {
                        var e = r.find(":file").closest(".pseudo");
                        e.clone().insertAfter(e);
                        var t = $("<form>");
                        for (
                          i = 0, attributes = e[0].attributes;
                          i < attributes.length;
                          i++
                        )
                          t.attr(attributes[i].name, attributes[i].value);
                        t.append(e.children()),
                          t.appendTo("body").hide(),
                          e.remove(),
                          t.ajaxSubmit({
                            beforeSend: function () {
                              r.find("span.state").text(
                                creatium.l10n("Загрузка...")
                              );
                            },
                            uploadProgress: function (e, t, i, a) {
                              r.find("span.state").text(
                                creatium.l10n("Загрузка...") + " " + a + "%"
                              );
                            },
                            success: function (e) {
                              r.data("result", e),
                                r
                                  .find("span.state")
                                  .text(creatium.l10n("Файл загружен")),
                                t.remove(),
                                a();
                            },
                            error: function (e) {
                              creatium.msg_error(
                                creatium.l10n("Ошибка загрузки!"),
                                400 === e.status ? e.responseText : null
                              ),
                                r
                                  .find("span.state")
                                  .text(creatium.l10n("Выберите файл...")),
                                r.data("result", null),
                                t.remove(),
                                a();
                            },
                            dataType: "json",
                          });
                      });
                    })();
              });
            n.find("[data-placeholder]").each(function () {
              var t,
                i = $(this);
              if (i.attr("placeholder"))
                return i.removeAttr("data-placeholder").data("placeholder", !1);
              i.val() &&
                (i.data("placeholder", !0),
                (t = i.val()),
                i.on("focus", function (e) {
                  i.data("placeholder") && i.val("").data("placeholder", !1);
                }),
                i.on("blur", function (e) {
                  "" === i.val() && i.val(t).data("placeholder", !0);
                }));
            });
            var c = n.find(".submit");
            n.on("submit", function (e) {
              if ((e.preventDefault(), $.now() - 2500 < d))
                creatium.msg_error(u.error, u.interval);
              else {
                var i = [];
                if (
                  (a.each(function (e) {
                    var t;
                    if (
                      ("checkbox-input" === s.fields[e].type
                        ? (s.fields[e].value = $(this)
                            .find("input")
                            .prop("checked")
                            ? m
                            : f)
                        : "radio-list" === s.fields[e].type
                        ? (s.fields[e].value =
                            $(this).find("[type=radio]:checked").val() || "")
                        : "select-menu" === s.fields[e].type
                        ? (s.fields[e].value = $(this).find("select").val())
                        : "hidden" === s.fields[e].type
                        ? ((s.fields[e].name = s.fields[e].id),
                          (s.fields[e].value = $(this).find("input").val()))
                        : "file" === s.fields[e].type
                        ? (s.fields[e].value = $(this).data("result") || "")
                        : ((t = $(this)
                            .find(".form-control")
                            .data("placeholder")),
                          (s.fields[e].value = t
                            ? ""
                            : $(this).find(".form-control").val())),
                      s.fields[e].required &&
                        "" === s.fields[e].value &&
                        i.push(u.required.replace("%field%", s.fields[e].name)),
                      "" !== s.fields[e].value)
                    )
                      return (
                        "email" !== s.fields[e].type ||
                          /.+@.+\..+/.test(s.fields[e].value) ||
                          i.push(u.email.replace("%field%", s.fields[e].name)),
                        "phone" !== s.fields[e].type ||
                        /.*\d.*\d.*\d.*\d.*/.test(s.fields[e].value)
                          ? void 0
                          : i.push(u.phone.replace("%field%", s.fields[e].name))
                      );
                  }),
                  "checkbox" === o.privacy &&
                    ((e = n
                      .closest(".body")
                      .find(".agreement-checkbox input")
                      .prop("checked")),
                    (t = o.privacy_checkbox.replace(/[<>]/g, "")),
                    !1 === e && i.push(u.required.replace("%field%", t))),
                  0 < i.length)
                )
                  return (
                    n.trigger("submit-error"),
                    void creatium.msg_error(u.validate, i.join("\n"))
                  );
                var r = {
                  name: "",
                  phone: "",
                  email: "",
                  count: "",
                  fields: {},
                  item: {},
                  send: s,
                  items: [],
                };
                _.each(s.fields, function (e) {
                  var t;
                  "" === r[e.type] && (r[(t = e.type)] || (r[t] = e.value)),
                    r.fields[e.name] || (r.fields[e.name] = e.value);
                }),
                  _.each(s.item, function (e) {
                    var t, i;
                    (t = r.item)[(i = e.type)] || (t[i] = _.escape(e.value));
                  }),
                  _.each(s.items, function (e, a) {
                    (r.items[a] = {}),
                      _.each(e, function (e) {
                        var t, i;
                        "amount" === e.type || "photo" === e.type
                          ? (t = r.items[a])[(i = e.type)] || (t[i] = e.value)
                          : (t = r.items[a])[(i = e.type)] ||
                            (t[i] = _.escape(e.value));
                      });
                  }),
                  o.payPrice &&
                    !r.items.length &&
                    r.items.push({
                      amount: 1,
                      price: o.payPrice,
                      title: o.payTitle,
                    }),
                  c.prop("disabled", !0);
                var t = function (e, t, i) {
                  var a;
                  _.defaults(e, r),
                    console.log("Form data", {
                      time: e.time,
                      name: e.name,
                      email: e.email,
                      phone: e.phone,
                      count: e.count,
                      fields: e.fields,
                      item: e.item,
                      items: e.items,
                    }),
                    c.prop("disabled", !1),
                    0 === e.result
                      ? (creatium.msg_error(u.error, e.errors),
                        n.trigger("submit-error"))
                      : 1 === e.result
                      ? ((creatium.redoken = e.redoken),
                        n.trigger("submit-success"),
                        "msg" === o.after
                          ? creatium.msg_success(_.template(o.msg, e), null)
                          : "url" === o.after
                          ? (location.href = _.template(o.url, e))
                          : "addhtml" === o.after
                          ? $("body").append(_.template(o.addhtml, e))
                          : "pay" === o.after
                          ? e.url
                            ? (location.href = e.url)
                            : e.form &&
                              $(e.form).hide().appendTo("body").submit()
                          : "msg+url" === o.after
                          ? creatium
                              .msg_success(_.template(o.msg, e), null)
                              .then(function () {
                                return (location.href = _.template(o.url, e));
                              })
                          : "msg+pay" === o.after
                          ? creatium
                              .msg_success(_.template(o.msg, e), null)
                              .then(function () {
                                return e.url
                                  ? (location.href = e.url)
                                  : e.form
                                  ? $(e.form).hide().appendTo("body").submit()
                                  : void 0;
                              })
                          : "msg+addhtml" === o.after
                          ? creatium
                              .msg_success(_.template(o.msg, e), null)
                              .then(function () {
                                return $("body").append(
                                  _.template(o.addhtml, e)
                                );
                              })
                          : "js" === o.after &&
                            ((a =
                              "(function (data) { with (data) {" +
                              o.js +
                              "} })(<%= data %>);"),
                            $.globalEval(
                              _.template(a, { data: JSON.stringify(e) })
                            )))
                      : (creatium.msg_error(u.error, null),
                        n.trigger("submit-error")),
                    n
                      .trigger("reset")
                      .find("[data-placeholder]")
                      .data("placeholder", !0),
                    l && l.length && creatium.cart.empty(),
                    creatium.modals.hideAll(),
                    (d = $.now());
                };
                $.ajax(creatium.origin + "/app/" + creatium.VERSION + "/form", {
                  type: "POST",
                  data: JSON.stringify(s),
                  dataType: "json",
                  contentType: "application/json",
                  processData: !1,
                  success: t,
                  error: t,
                });
              }
            });
          });
        });
      });
    }),
    creatium.init.local(function ($root) {
      var antiflood = { last: 0, interval: 2500 },
        language = {
          error: creatium.l10n("Не удалось отправить форму!"),
          validate: creatium.l10n("Неправильно заполнены поля:"),
          interval: creatium.l10n(
            "Пожалуйста, повторите отправку через пару секунд."
          ),
          required: creatium.l10n("Поле «%field%» обязательно для заполнения."),
          email: creatium.l10n(
            "Поле «%field%» должно содержать ваш настоящий e-mail адрес."
          ),
          phone: creatium.l10n(
            "Поле «%field%» должно содержать правильный номер телефона."
          ),
          number: creatium.l10n(
            "Поле «%field%» должно быть правильным числом."
          ),
          yes: creatium.l10n("Да"),
          no: creatium.l10n("Нет"),
        };
      $root
        .find('.btn[data-action="send"], .btn-meta[data-action="send"]')
        .each(function () {
          var e = $(this),
            t = e.closest("[data-form]");
          t.length &&
            (e.on("click", function () {
              t.trigger("submit");
            }),
            !1 === t.data("isquiz") &&
              (t.on("submit", function () {
                e.prop("disabled", !0);
              }),
              t.on("submit-success submit-error submit-prevent", function () {
                e.prop("disabled", !1);
              })));
        }),
        $root.find(".node[data-form]").each(function () {
          var $form = $(this);
          $form.data("api-isQuiz", $form.data("isquiz")),
            $form.data("api-name", $form.data("form").name),
            $form.data("api-errors", []),
            creatium.lazy.add($form, function ($form) {
              $form.find(".widget-field").each(function () {
                creatium.lazy.trigger(this);
              }),
                $form.on("submit-error", function () {
                  $(creatium).triggerHandler("submit-error");
                }),
                $form.on("submit-success", function (e, t, i) {
                  $(creatium).triggerHandler("submit-success"),
                    $(creatium).triggerHandler("api-form-submit", [
                      $form,
                      t,
                      i,
                    ]),
                    creatium.store.set("is_converted", !0);
                }),
                $form.on("keyup", function (e) {
                  "TEXTAREA" !== e.target.tagName &&
                    13 === e.keyCode &&
                    $form.trigger("submit");
                });
              var fields = [],
                errors = [],
                variables = {};
              $form.on("input change", function () {
                (fields = []),
                  (errors = []),
                  (variables = {}),
                  $form.data("api-errors", errors),
                  $form.data("api-$fields", $()),
                  $form
                    .find(".widget-field, .form-variable-slot")
                    .each(function () {
                      var $field = $(this),
                        list = [];
                      if (
                        ($field
                          .find("[data-item-text][data-item-value]")
                          .each(function () {
                            list.push({
                              text: $(this).attr("data-item-text"),
                              value: +$(this).attr("data-item-value") || 0,
                            });
                          }),
                        $field.hasClass("form-variable-slot"))
                      ) {
                        var variable = $field.data("variable"),
                          last_value = $field.data("last-value"),
                          new_value = variables[variable];
                        last_value !== new_value &&
                          ($field.text(new_value),
                          $field.data("last-value", new_value));
                      } else if (
                        $field.closest("[data-form]")[0] === $form[0]
                      ) {
                        $form.data(
                          "api-$fields",
                          $form.data("api-$fields").add($field)
                        );
                        var api_value = null;
                        $field.data("api-value", api_value),
                          $field.data("api-disabledByCondition", !0);
                        var vals = $field.find(".metahtml").data("vals"),
                          is_hidden = !1;
                        if ($field.data("api-disabledManually")) is_hidden = !0;
                        else if (vals.condition)
                          try {
                            var scope = _.extend(
                                {
                                  round: Math.round,
                                  min: Math.min,
                                  max: Math.max,
                                  ceil: Math.ceil,
                                  floor: Math.floor,
                                  pow: Math.pow,
                                  abs: Math.abs,
                                  random: Math.random,
                                },
                                variables
                              ),
                              __condition = vals.condition;
                            with (scope) is_hidden = !eval(__condition);
                          } catch (e) {
                            console.error("Condition error", e),
                              (is_hidden = !1);
                          }
                        if (
                          (is_hidden &&
                            !$field.hasClass("is-hidden") &&
                            ($field.addClass("is-hidden"),
                            $field.triggerHandler("api-disable")),
                          !is_hidden &&
                            $field.hasClass("is-hidden") &&
                            ($field.removeClass("is-hidden"),
                            $field.triggerHandler("api-enable")),
                          is_hidden)
                        )
                          return (
                            vals.variable && (variables[vals.variable] = 0),
                            void (
                              vals.variable2 && (variables[vals.variable2] = "")
                            )
                          );
                        $field.data("api-disabledByCondition", !1);
                        var $slide = $field.closest(
                          ".widget-form2 .swiper-slide"
                        );
                        if ($slide.length) {
                          var $slides = $slide.parent().children(),
                            fieldSlideIndex = $slide.index(),
                            activeSlideIndex = $slides
                              .filter(".swiper-slide-active")
                              .index();
                          if (
                            (activeSlideIndex < 0 && (activeSlideIndex = 0),
                            activeSlideIndex < fieldSlideIndex)
                          )
                            return;
                        }
                        var field = {
                          name: vals.text,
                          type: vals.type,
                          required: vals.required,
                          id: vals.id,
                          value: null,
                        };
                        if ("textarea" === vals.type)
                          (field.value = $field.find("textarea").val()),
                            (api_value = field.value),
                            vals.required &&
                              !field.value &&
                              errors.push(["required", field.name]),
                            vals.variable &&
                              (variables[vals.variable] = field.value);
                        else if ("text" === vals.type)
                          (field.value = $field.find("input").val()),
                            (api_value = field.value),
                            vals.required &&
                              !field.value &&
                              errors.push(["required", field.name]),
                            vals.variable &&
                              (variables[vals.variable] = field.value);
                        else if ("password" === vals.type)
                          (field.value = $field.find("input").val()),
                            (api_value = field.value),
                            vals.required &&
                              !field.value &&
                              errors.push(["required", field.name]),
                            vals.variable &&
                              (variables[vals.variable] = field.value);
                        else if ("name" === vals.type)
                          (field.value = $field.find("input").val()),
                            (api_value = field.value),
                            vals.required &&
                              !field.value &&
                              errors.push(["required", field.name]),
                            vals.variable &&
                              (variables[vals.variable] = field.value);
                        else if ("phone" === vals.type)
                          (field.value = $field.find("input").val()),
                            (api_value = field.value),
                            vals.required &&
                              !field.value &&
                              errors.push(["required", field.name]),
                            field.value &&
                              !/.*\d.*\d.*\d.*\d.*/.test(field.value) &&
                              errors.push(["phone", field.name]),
                            vals.variable &&
                              (variables[vals.variable] = field.value);
                        else if ("email" === vals.type)
                          (field.value = $field.find("input").val()),
                            (api_value = field.value),
                            vals.required &&
                              !field.value &&
                              errors.push(["required", field.name]),
                            field.value &&
                              !/.+@.+\..+/.test(field.value) &&
                              errors.push(["email", field.name]),
                            vals.variable &&
                              (variables[vals.variable] = field.value);
                        else if ("count" === vals.type)
                          (field.value = +$field.find("input").val() || 0),
                            (api_value = field.value),
                            vals.required &&
                              !field.value &&
                              errors.push(["required", field.name]),
                            vals.variable &&
                              (variables[vals.variable] = field.value);
                        else if ("slider" === vals.type)
                          (field.value = +$field.find("input").val() || 0),
                            (api_value = field.value),
                            vals.variable &&
                              (variables[vals.variable] = field.value);
                        else if (
                          "checkbox-list" === vals.type ||
                          "checkbox-visual" === vals.type
                        ) {
                          field.value = [];
                          var api_value = {},
                            indexes = [];
                          $field
                            .find("input[type=checkbox]")
                            .each(function (e) {
                              var t = $(this).prop("checked"),
                                i = list[e].text;
                              t && (field.value.push(i), indexes.push(e)),
                                (api_value[i] = t);
                            }),
                            (field.value = field.value.join(", ")),
                            vals.required &&
                              !field.value &&
                              errors.push(["required", field.name]),
                            vals.variable &&
                              ((variables[vals.variable] = 0),
                              indexes.forEach(function (e) {
                                variables[vals.variable] += list[e].value;
                              })),
                            vals.variable2 &&
                              ((variables[vals.variable2] = ""),
                              indexes.forEach(function (e) {
                                variables[vals.variable2].length &&
                                  (variables[vals.variable2] += ", "),
                                  (variables[vals.variable2] += list[e].text);
                              }));
                        } else if ("checkbox-input" === vals.type) {
                          var checked = $field
                            .find("input[type=checkbox]")
                            .prop("checked");
                          vals.required &&
                            !checked &&
                            errors.push(["required", field.name]),
                            (field.value = checked
                              ? language.yes
                              : language.no),
                            (api_value = checked),
                            vals.variable &&
                              (variables[vals.variable] =
                                +(checked ? vals.valueOn : vals.valueOff) || 0);
                        } else if ("privacy-checkbox" === vals.type) {
                          var checked = $field
                            .find("input[type=checkbox]")
                            .prop("checked");
                          vals.required &&
                            !checked &&
                            errors.push([
                              "required",
                              vals.privacy_checkbox.replace(/[<>]/g, ""),
                            ]),
                            (field.value = checked
                              ? language.yes
                              : language.no),
                            (api_value = checked),
                            vals.variable &&
                              (variables[vals.variable] =
                                +(checked ? vals.valueOn : vals.valueOff) || 0);
                        } else if (
                          "radio-list" === vals.type ||
                          "radio-visual" === vals.type
                        ) {
                          var index = $field
                            .find("input")
                            .index($field.find("input:checked"));
                          0 <= index
                            ? ((field.value = list[index].text),
                              (api_value = field.value))
                            : ((field.value = ""),
                              (api_value = null),
                              vals.required &&
                                errors.push(["required", field.name])),
                            vals.variable &&
                              (variables[vals.variable] =
                                0 <= index ? list[index].value : 0),
                            vals.variable2 &&
                              (variables[vals.variable2] =
                                0 <= index ? list[index].text : "");
                        } else if ("select-menu" === vals.type) {
                          var index =
                            $field.find("select option:selected").index() - 1;
                          (api_value =
                            0 <= index
                              ? ((field.value = list[index].text), field.value)
                              : null),
                            vals.required &&
                              !field.value &&
                              errors.push(["required", field.name]),
                            vals.variable &&
                              (variables[vals.variable] =
                                0 <= index ? list[index].value : 0),
                            vals.variable2 &&
                              (variables[vals.variable2] =
                                0 <= index ? list[index].text : "");
                        } else if ("file" === vals.type)
                          (field.value = $field.data("result") || ""),
                            (api_value = field.value ? [field.value] : null),
                            vals.required &&
                              !field.value &&
                              errors.push(["required", field.name]);
                        else if ("hidden" === vals.type)
                          (field.value = $field.find("input").val()),
                            (api_value = field.value),
                            vals.variable &&
                              (variables[vals.variable] = field.value);
                        else if ("hackable" === vals.type) {
                          var hackable_value = $field
                            .find("[cr-field]")
                            .attr("data-value");
                          "number" === vals.typing
                            ? ((api_value = +hackable_value || 0),
                              (field.value = api_value))
                            : "boolean" === vals.typing
                            ? ((api_value =
                                "1" === hackable_value ||
                                "true" === hackable_value),
                              (field.value = hackable_value
                                ? language.yes
                                : language.no))
                            : ((api_value = hackable_value),
                              (field.value = hackable_value)),
                            vals.required &&
                              !field.value &&
                              errors.push(["required", field.name]),
                            vals.variable &&
                              ("boolean" === vals.typing
                                ? (variables[vals.variable] =
                                    +(api_value
                                      ? vals.valueOn
                                      : vals.valueOff) || 0)
                                : (variables[vals.variable] = api_value));
                        } else if ("result" === vals.type) {
                          var _result = 0;
                          try {
                            var scope = _.extend(
                                {
                                  round: Math.round,
                                  min: Math.min,
                                  max: Math.max,
                                  ceil: Math.ceil,
                                  floor: Math.floor,
                                  pow: Math.pow,
                                  abs: Math.abs,
                                  random: Math.random,
                                },
                                variables
                              ),
                              __formula = vals.formula;
                            with (scope) _result = eval(__formula);
                            "number" == typeof _result &&
                              (_result = parseFloat(_result.toFixed(2))),
                              void 0 === _result && (_result = 0),
                              _.isNaN(_result) && (_result = 0);
                          } catch (e) {
                            console.error("Error in formula", e), (_result = 0);
                          }
                          (field.value = vals.format.replace(
                            "%result%",
                            _result
                          )),
                            (api_value = _result),
                            $field.find("[cr-field-result]").text(field.value),
                            vals.variable &&
                              (variables[vals.variable] = _result);
                        } else {
                          if ("html" === vals.type) {
                            var scope = _.cloneDeep(variables),
                              template = $field.data("template");
                            return (
                              template ||
                                ((template = _.template(vals.template)),
                                $field.data("template", template)),
                              void $field
                                .find("[cr-field-template]")
                                .html(template(scope))
                            );
                          }
                          if ("privacy-button" === vals.type) return;
                          if ("privacy-text" === vals.type) return;
                          if ("cont" === vals.type) return;
                        }
                        fields.push(field);
                        var api_validations =
                          $field.data("api-validations") || [];
                        api_validations.forEach(function (e) {
                          !1 === e.cb(api_value) &&
                            errors.push(["custom", e.message]);
                        }),
                          _.isEqual($field.data("api-value"), api_value) ||
                            ($field.data("api-value", api_value),
                            $field.triggerHandler("api-change"));
                      }
                    }),
                  (errors = errors.map(function (e) {
                    return "custom" === e[0]
                      ? e[1]
                      : language[e[0]].replace("%field%", e[1]);
                  }));
              }),
                $form.trigger("input"),
                $form.on("reset", function () {
                  $form.triggerHandler("input");
                }),
                $form.on("validate", function (e, t) {
                  $form.trigger("input"),
                    0 < errors.length
                      ? ($form.trigger("submit-error"),
                        creatium.msg_error(
                          language.validate,
                          errors.join("\n")
                        ))
                      : t();
                }),
                $form.on("submit", function (e) {
                  if (
                    (e.stopPropagation(),
                    $form.triggerHandler("input"),
                    0 < errors.length)
                  )
                    return (
                      $form.trigger("submit-error"),
                      void creatium.msg_error(
                        language.validate,
                        errors.join("\n")
                      )
                    );
                  if (
                    $form.data("isquiz") &&
                    $form
                      .find("[cr-form-container]")
                      .first()
                      .find("> .swiper-wrapper > .swiper-slide")
                      .filter(".swiper-slide-next").length
                  )
                    return void $form.trigger("slidenext");
                  if ($.now() - antiflood.interval < antiflood.last)
                    creatium.msg_error(language.error, language.interval);
                  else {
                    var l = $form.data("form"),
                      s = creatium.closest($form, ".node.widget-cart").length
                        ? creatium.cart.list
                        : null,
                      t = creatium.closest($form, "[data-item]"),
                      c = _.cloneDeep(t.data("item"));
                    [c].concat(s).forEach(function (e) {
                      var t = _.filter(e, { type: "price" })[0];
                      t &&
                        (((t = _.cloneDeep(t)).type = "price_float"),
                        (t.value = creatium.cart.getPrice(t.value)),
                        e.push(t));
                    }),
                      $(creatium).triggerHandler("api-before-form-submit", [
                        $form,
                        fields,
                      ]);
                    var d = {
                      hit: {
                        page_id: creatium.page_id,
                        ab_id: creatium.content_id,
                        visit_id: creatium.visit_id,
                        redoken: creatium.redoken,
                        referer: document.referrer,
                        uri: location.pathname + location.search,
                      },
                      form: _.cloneDeep(
                        _.extend(l, { name: $form.data("api-name") })
                      ),
                      item: c || [],
                      items: s || [],
                      fields: fields,
                    };
                    if (
                      (_.each(variables, function (e, t) {
                        for (var i = "{{" + t + "}}"; 0 <= l.url.indexOf(i); )
                          l.url = l.url.replace(i, encodeURIComponent(e));
                        for (; 0 <= l.name.indexOf(i); )
                          l.name = l.name.replace(i, e);
                        for (; 0 <= l.msg.indexOf(i); )
                          l.msg = l.msg.replace(i, e);
                      }),
                      !0 === $form.data("api-prevent"))
                    )
                      return (
                        $form.data("api-prevent", !1),
                        void $form.triggerHandler("submit-prevent")
                      );
                    function i(e) {
                      if (0 === e.result)
                        $form.trigger("submit-error"),
                          creatium.msg_error(language.error, e.errors);
                      else if (1 === e.result) {
                        (creatium.redoken = e.redoken),
                          "filter" !== l.action &&
                            ($form.trigger("reset"),
                            s && s.length && creatium.cart.empty(),
                            creatium.modals.hideAll()),
                          $form.triggerHandler("api-submit", [
                            e.order_id,
                            fields,
                          ]),
                          $form.triggerHandler("submit-success", [
                            e.order_id,
                            fields,
                          ]);
                        var t,
                          a = {
                            name: "",
                            phone: "",
                            email: "",
                            count: "",
                            fields: {},
                            item: {},
                            send: d,
                            items: [],
                            member_id: creatium.membership.member_id,
                          };
                        if (
                          (_.each(fields, function (e) {
                            "" === a[e.type] && (a[e.type] = e.value),
                              a.fields[e.name] || (a.fields[e.name] = e.value);
                          }),
                          _.each(c, function (e) {
                            a.item[e.type] ||
                              (a.item[e.type] = _.escape(e.value));
                          }),
                          _.each(s, function (e, i) {
                            (a.items[i] = {}),
                              _.each(e, function (e) {
                                var t;
                                a.items[i][e.type] ||
                                  ((t =
                                    "amount" === e.type || "photo" === e.type
                                      ? e.value
                                      : _.escape(e.value)),
                                  (a.items[i][e.type] = t));
                              });
                          }),
                          _.extend(a, e),
                          console.log("Form data", a),
                          "filter" === l.action)
                        ) {
                          var i = _.template(l.url, a);
                          try {
                            var r = new URL(location.href),
                              n = new URL(i, r);
                            if (
                              (l.urlauto &&
                                _.each(variables, function (e, t) {
                                  n.searchParams.append(t, e);
                                }),
                              l.urlclean)
                            )
                              for (const o of [...n.searchParams.keys()])
                                "" === n.searchParams.get(o) &&
                                  n.searchParams.delete(o);
                            r.origin === n.origin && r.pathname === n.pathname
                              ? (window.history.replaceState(
                                  {},
                                  "",
                                  n.search || "?"
                                ),
                                location.reload())
                              : (location.href = n.toString());
                          } catch (e) {
                            console.error("Filter error", e),
                              (location.href = i);
                          }
                        } else
                          "msg" === l.after
                            ? creatium.msg_success(_.template(l.msg, a))
                            : "url" === l.after
                            ? (location.href = _.template(l.url, a))
                            : "addhtml" === l.after
                            ? $("body").append(_.template(l.addhtml, a))
                            : "pay" === l.after
                            ? e.url
                              ? (location.href = e.url)
                              : e.form &&
                                $(e.form).hide().appendTo("body").submit()
                            : "msg+url" === l.after
                            ? ((t = function () {
                                location.href = _.template(l.url, a);
                              }),
                              creatium
                                .msg_success(_.template(l.msg, a))
                                .then(function () {
                                  "stepwise" === l.sequence && t();
                                }),
                              "simultaneous" === l.sequence
                                ? t()
                                : "delayed3sec" === l.sequence
                                ? setTimeout(t, 3e3)
                                : "delayed5sec" === l.sequence
                                ? setTimeout(t, 5e3)
                                : "delayed10sec" === l.sequence &&
                                  setTimeout(t, 1e4))
                            : "msg+pay" === l.after
                            ? ((t = function () {
                                e.url
                                  ? (location.href = e.url)
                                  : e.form &&
                                    $(e.form).hide().appendTo("body").submit();
                              }),
                              creatium
                                .msg_success(_.template(l.msg, a))
                                .then(function () {
                                  "stepwise" === l.sequence && t();
                                }),
                              "simultaneous" === l.sequence
                                ? t()
                                : "delayed3sec" === l.sequence
                                ? setTimeout(t, 3e3)
                                : "delayed5sec" === l.sequence
                                ? setTimeout(t, 5e3)
                                : "delayed10sec" === l.sequence &&
                                  setTimeout(t, 1e4))
                            : "msg+addhtml" === l.after
                            ? ((t = function () {
                                $("body").append(_.template(l.addhtml, a));
                              }),
                              creatium
                                .msg_success(_.template(l.msg, a))
                                .then(function () {
                                  "stepwise" === l.sequence && t();
                                }),
                              "simultaneous" === l.sequence
                                ? t()
                                : "delayed3sec" === l.sequence
                                ? setTimeout(t, 3e3)
                                : "delayed5sec" === l.sequence
                                ? setTimeout(t, 5e3)
                                : "delayed10sec" === l.sequence &&
                                  setTimeout(t, 1e4))
                            : "js" === l.after &&
                              ((jscode =
                                "(function (data) {with (data) {" +
                                l.js +
                                "}})(<%= data %>);"),
                              $.globalEval(
                                _.template(jscode, { data: JSON.stringify(a) })
                              ));
                        send_last = $.now();
                      } else
                        $form.trigger("submit-error"),
                          creatium.msg_error(language.error);
                    }
                    function a(t, i) {
                      var e = d.fields.find(function (e) {
                        return e[t] === i;
                      });
                      return e && e.value;
                    }
                    var r,
                      n,
                      o,
                      u,
                      m,
                      e = function () {
                        $.ajax(
                          creatium.origin +
                            "/app/" +
                            creatium.VERSION +
                            "/form",
                          {
                            type: "POST",
                            data: JSON.stringify(d),
                            dataType: "json",
                            contentType: "application/json",
                            processData: !1,
                            success: i,
                            error: i,
                          }
                        );
                      },
                      t = function (e) {
                        creatium.membership
                          .signup({
                            email: a("type", "email"),
                            password: a("type", "password"),
                          })
                          .then(e)
                          .fail(function () {
                            $form.trigger("submit-error");
                          });
                      };
                    "order" === l.action
                      ? e()
                      : "signup" === l.action
                      ? (creatium.legacy_report("signup without order"),
                        t(function () {
                          i({
                            result: 1,
                            redoken: creatium.redoken,
                            order_id: 0,
                          });
                        }))
                      : "signup+order" === l.action
                      ? t(e)
                      : "login" === l.action
                      ? ((m = function () {
                          i({
                            result: 1,
                            redoken: creatium.redoken,
                            order_id: 0,
                          });
                        }),
                        creatium.membership
                          .login({
                            email: a("type", "email"),
                            password: a("type", "password"),
                          })
                          .then(m)
                          .fail(function () {
                            $form.trigger("submit-error");
                          }))
                      : "filter" === l.action
                      ? i({ result: 1, redoken: creatium.redoken, order_id: 0 })
                      : "change-email" === l.action
                      ? ((u = e),
                        creatium.membership
                          .change_email({
                            current_password: a("type", "password"),
                            new_email: a("type", "email"),
                          })
                          .then(u)
                          .fail(function () {
                            $form.trigger("submit-error");
                          }))
                      : "change-password" === l.action
                      ? ((o = e),
                        creatium.membership
                          .change_password({
                            current_password: a("id", "current_password"),
                            new_password: a("id", "new_password"),
                          })
                          .then(o)
                          .fail(function () {
                            $form.trigger("submit-error");
                          }))
                      : "request-password-recovery" === l.action
                      ? ((n = e),
                        creatium.membership
                          .request_password_recovery({
                            email: a("type", "email"),
                          })
                          .then(n)
                          .fail(function () {
                            $form.trigger("submit-error");
                          }))
                      : "recover-password" === l.action &&
                        ((r = e),
                        creatium.membership
                          .recover_password({
                            confirmation_code: a("id", "confirmation_code"),
                            new_password: a("type", "password"),
                          })
                          .then(r)
                          .fail(function () {
                            $form.trigger("submit-error");
                          }));
                  }
                });
            });
        });
    }),
    (creatium.membership = {
      member_id: creatium.member ? creatium.member.id : 0,
      translate_error: function (e) {
        var t = "";
        if (
          ("Not authorized" === e.message
            ? (t = "Вы не авторизованы")
            : "Sending email failed. You may have unsubscribed from the mailing list." ===
              e.message
            ? (t = "Не удается отправить письмо на указанный почтовый адрес")
            : "You have no email+password registration" === e.message
            ? (t = "У этого пользователя другой способ авторизации")
            : "User registration is disabled" === e.message
            ? (t = "Регистрация на сайте отключена")
            : "New email or new password required" === e.message
            ? (t = "Не указано поле для изменения")
            : "Captcha need" === e.message
            ? (t = "Отсутствует капча")
            : "Invalid captcha response" === e.message &&
              (t = "Неверная капча"),
          e.fields)
        )
          for (var i in e.fields) {
            var a = e.fields[i];
            "Required" === a
              ? "email" === i
                ? (t += "Нужно указать электронную почту\n")
                : "password" === i
                ? (t += "Нужно указать пароль\n")
                : "code" === i
                ? (t += "Нужно указать код подтверждения\n")
                : "currentPassword" === i &&
                  (t += "Нужно указать текущий пароль\n")
              : "User with such email already exists" === a
              ? (t += "Такой пользователь уже зарегистрирован\n")
              : "It is not valid email" === a
              ? (t += "Указана неправильная почта\n")
              : "Minimum password length is 6 characters" === a
              ? (t += "Пароль не должен быть короче 6 символов\n")
              : "Maximum password length is 50 characters" === a
              ? (t += "Пароль не должен быть длиннее 50 символов\n")
              : "User with such email does not exists" === a
              ? (t += "Такого пользователя не существует\n")
              : "Invalid password" === a || "Invalid current password" === a
              ? (t += "Неверный пароль\n")
              : "Invalid verification code" === a &&
                (t += "Неверный код подтверждения\n");
          }
        return t;
      },
      signup: function (t) {
        var i;
        return $.post("/app/" + cr.VERSION + "/member/signup-creatium", {
          email: t.email,
          password: t.password,
        })
          .then(function (e) {
            if ("ok" === e.status) return creatium.membership.login(t);
            throw (
              ("error" === e.status &&
                (i = creatium.membership.translate_error(e)),
              new Error())
            );
          })
          .fail(function () {
            i
              ? creatium.msg_error("Ошибка регистрации", i)
              : creatium.msg_error("Неизвестная ошибка регистрации");
          });
      },
      login: function (e) {
        var t;
        return $.post("/app/" + cr.VERSION + "/member/auth-creatium", {
          email: e.email,
          password: e.password,
        })
          .then(function (e) {
            if ("ok" !== e.status)
              throw (
                ("error" === e.status &&
                  (t = creatium.membership.translate_error(e)),
                new Error())
              );
            (creatium.member = e.member),
              (creatium.membership.member_id = creatium.member.id);
          })
          .fail(function () {
            t
              ? creatium.msg_error("Ошибка авторизации", t)
              : creatium.msg_error("Неизвестная ошибка авторизации");
          });
      },
      logout: function () {
        var t;
        return $.post("/app/" + cr.VERSION + "/member/logout")
          .then(function (e) {
            if ("ok" === e.status)
              (creatium.member = null), (creatium.membership.member_id = 0);
            else {
              if ("error" !== e.status) throw new Error();
              if ("Not authorized" !== e.message)
                throw ((t = "Не удалось выйти из аккаунта"), new Error());
            }
          })
          .fail(function () {
            t
              ? creatium.msg_error("Ошибка логаута", t)
              : creatium.msg_error("Неизвестная ошибка логаута");
          });
      },
      request_password_recovery: function (e) {
        var t;
        return $.post("/app/" + cr.VERSION + "/member/recovery-creatium", {
          email: e.email,
        })
          .then(function (e) {
            if ("ok" !== e.status)
              throw (
                ("error" === e.status &&
                  (t = creatium.membership.translate_error(e)),
                new Error())
              );
          })
          .fail(function () {
            t
              ? creatium.msg_error("Ошибка запроса восстановление пароля", t)
              : creatium.msg_error(
                  "Неизвестная ошибка запроса восстановление пароля"
                );
          });
      },
      recover_password: function (e) {
        var t;
        return $.post(
          "/app/" + cr.VERSION + "/member/confirm-recovery-creatium",
          { code: e.confirmation_code, newPassword: e.new_password }
        )
          .then(function (e) {
            if ("ok" !== e.status)
              throw (
                ("error" === e.status &&
                  (t = creatium.membership.translate_error(e)),
                new Error())
              );
          })
          .fail(function () {
            t
              ? creatium.msg_error("Ошибка восстановление пароля", t)
              : creatium.msg_error("Неизвестная ошибка восстановление пароля");
          });
      },
      change_email: function (e) {
        var t;
        return $.post(
          "/app/" + cr.VERSION + "/member/change-credentials-creatium",
          { currentPassword: e.current_password, newEmail: e.new_email }
        )
          .then(function (e) {
            if ("ok" !== e.status)
              throw (
                ("error" === e.status &&
                  (t = creatium.membership.translate_error(e)),
                new Error())
              );
          })
          .fail(function () {
            t
              ? creatium.msg_error("Ошибка изменения почты", t)
              : creatium.msg_error("Неизвестная ошибка изменения почты");
          });
      },
      change_password: function (e) {
        var t;
        return $.post(
          "/app/" + cr.VERSION + "/member/change-credentials-creatium",
          { currentPassword: e.current_password, newPassword: e.new_password }
        )
          .then(function (e) {
            if ("ok" !== e.status)
              throw (
                ("error" === e.status &&
                  (t = creatium.membership.translate_error(e)),
                new Error())
              );
          })
          .fail(function () {
            t
              ? creatium.msg_error("Ошибка изменения пароля", t)
              : creatium.msg_error("Неизвестная ошибка изменения пароля");
          });
      },
    }),
    creatium.init.local(function (e) {
      e.find('[data-action="logout"]').each(function () {
        var e = $(this);
        e.on("click", function () {
          e.addClass("disabled"),
            creatium.membership
              .logout()
              .then(function () {
                location.href = e.attr("data-link");
              })
              .fail(function () {
                e.removeClass("disabled");
              });
        });
      });
    }),
    creatium.init.local(function e(t) {
      return window.particlesJS
        ? void t.find(".bg_particles").each(function () {
            var e = $(this),
              t = e.data("config");
            e.removeAttr("data-config"), e.empty(), particlesJS(e.get(0), t);
          })
        : setTimeout(function () {
            e(t);
          }, 50);
    }),
    creatium.init.global(function () {
      var i = $(".section[data-fixation]")
        .not("." + creatium.screen + "-hidden")
        .filter(function () {
          return "top" === $(this).data("fixation")[creatium.screen];
        })
        .first();
      if (i.length) {
        i.addClass("fixation-top");
        var a = !1,
          r = $("<div></div>"),
          e = i.attr("data-opacity");
        if (creatium.scroll.snapping)
          return (
            i.css("opacity", e),
            i.addClass("fixed"),
            void i.triggerHandler("fixation-change")
          );
        function t() {
          var t;
          a
            ? r[0].getBoundingClientRect().top >= cr.layout.top &&
              (r.remove(),
              i.css("opacity", 1),
              i.removeClass("fixed"),
              i.triggerHandler("fixation-change"),
              (a = !1))
            : i[0].getBoundingClientRect().top < cr.layout.top &&
              ((t = i[0].offsetHeight),
              r.css("height", t).insertAfter(i),
              i.css("opacity", e),
              i.addClass("fixed"),
              i.triggerHandler("fixation-change"),
              i.find(".lazy-loading").one("lazyload", function () {
                var e;
                a &&
                  ((e = i[0].offsetHeight),
                  t !== e && ((t = e), r.css("height", t)));
              }),
              (a = !0));
        }
        $(document).on("scroll", t), t();
      }
    }),
    creatium.init.global(function () {
      var i = $(".section[data-fixation]")
        .not("." + creatium.screen + "-hidden")
        .filter(function () {
          return "bottom" === $(this).data("fixation")[creatium.screen];
        })
        .first();
      if (i.length) {
        i.addClass("fixation-bottom");
        var a = !1,
          e = $("<div></div>"),
          r = i.attr("data-opacity");
        if (creatium.scroll.snapping)
          return (
            i.css("opacity", r),
            i.addClass("fixed"),
            void i.triggerHandler("fixation-change")
          );
        function t() {
          var t;
          a
            ? !n &&
              e[0].getBoundingClientRect().bottom >= window.innerHeight &&
              (e.remove(),
              i.css("opacity", 1),
              i.removeClass("fixed"),
              i.triggerHandler("fixation-change"),
              (a = !1))
            : (n || i[0].getBoundingClientRect().bottom < window.innerHeight) &&
              ((t = i[0].offsetHeight),
              e.insertAfter(i),
              i.css("opacity", r),
              i.addClass("fixed"),
              i.triggerHandler("fixation-change"),
              $("body").css("padding-bottom", t),
              i.find(".lazy-loading").one("lazyload", function () {
                var e;
                a &&
                  ((e = i[0].offsetHeight),
                  t !== e && ((t = e), $("body").css("height", t)));
              }),
              (a = !0));
        }
        var n = i
          .nextAll(".section")
          .not("." + creatium.screen + "-hidden")
          .first()
          .is(".section-helper");
        $(document).on("scroll", t), t();
      }
    }),
    creatium.init.global(function e() {
      return $.fancybox
        ? void $(document).off("click.fb-start")
        : setTimeout(function () {
            e(event);
          }, 50);
    }),
    (creatium.fancybox = function (e, t) {
      $.fancybox.open(
        e,
        {
          loop: !0,
          lang: "en",
          i18n: {
            en: {
              CLOSE: "",
              NEXT: "",
              PREV: "",
              ERROR:
                "The requested content cannot be loaded. <br/> Please try again later.",
              PLAY_START: "",
              PLAY_STOP: "",
              FULL_SCREEN: "",
              THUMBS: "",
              DOWNLOAD: "",
              SHARE: "",
              ZOOM: "",
            },
          },
          buttons: ["zoom", "close"],
        },
        t
      );
    }),
    creatium.waitForAppear(".fancybox", function (e) {
      var t,
        i = $(e),
        e = i.attr("data-group"),
        a = [],
        r = 0;
      e
        ? (t = $('.fancybox[data-group="' + e + '"]')).each(function () {
            a.push({ src: $(this).attr("href") }),
              $(this).attr("href") === i.attr("href") && (r = t.index(i));
          })
        : a.push({ src: i.attr("href") }),
        i.on("click", function e(t) {
          return (
            t.preventDefault(),
            $.fancybox
              ? void creatium.fancybox(a, r)
              : setTimeout(function () {
                  e(t);
                }, 50)
          );
        });
    }),
    creatium.init.global(function () {
      var e;
      creatium.cookies.alert &&
        !0 !== creatium.store.get("cookies-alert-closed") &&
        ((e = $('<div class="cookies-alert"></div>').appendTo(".area-wrapper")),
        $('<i class="fa fa-times"></i>')
          .appendTo(e)
          .on("click", function () {
            creatium.store.set("cookies-alert-closed", !0),
              e.animate({ opacity: 0 }, 500);
          }),
        $('<div class="text"></div>')
          .html(creatium.cookies.message)
          .appendTo(e),
        e.css({ opacity: 0 }).animate({ opacity: 1 }, 1e3));
    }),
    (creatium.scroll.snapping =
      creatium.scroll.snapping &&
      "scrollSnapType" in document.documentElement.style),
    (creatium.scrollTo = function (i, a) {
      (a = a || 0), $(creatium).triggerHandler("before-scroll-to");
      var e,
        t = $(".section.fixation-top:visible:first"),
        r = $("html, body"),
        n = i.closest(".modal");
      if (n.length)
        for (var r = n, o = _.last(creatium.modals.list).$el; o[0] !== n[0]; )
          creatium.modals.hide(o), (o = _.last(creatium.modals.list).$el);
      else
        creatium.modals.hideAll(),
          creatium.scroll.snapping
            ? ((i = i.closest(".section")),
              (r = $(".area-wrapper")),
              $(".area-wrapper").addClass("scroll-snap-cancel"))
            : t.length &&
              ((e = i.closest(".section").index(".section")),
              t.index(".section") < e && (a -= t.height()));
      (t = i.get(0).getBoundingClientRect().top + r.scrollTop() + a),
        r.stop().animate(
          { scrollTop: t },
          {
            duration: 1e3,
            easing: "easeInOutCubic",
            step: _.throttle(
              function (e, t) {
                t.end =
                  i.get(0).getBoundingClientRect().top + r.scrollTop() + a;
              },
              100,
              { trailing: !1 }
            ),
            always: function () {
              creatium.scroll.snapping &&
                $(".area-wrapper").removeClass("scroll-snap-cancel");
            },
          }
        ),
        $(creatium).triggerHandler("after-scroll-to");
    }),
    creatium.init.global(function () {
      "#" !== location.hash[0] ||
        ((i = $(location.hash)).length && creatium.scrollTo(i));
      var e = location.href.match(/scrollblock=(\d+)/);
      if (e) {
        var t = location.href.match(/scrolloffset=(-?\d+)/),
          i = t.length ? +t[1] : 0,
          t = +e[1],
          e = $(".node.section").eq(t);
        if (!e.length)
          throw new Error(
            "lib-scroll trying to scroll to unexisting " + t + " block"
          );
        i = e.offset().top + i;
        $(document).scrollTop(i);
      }
      creatium.scroll.snapping && $(".area-wrapper").addClass("scroll-snap");
    }),
    creatium.init.local(function (e) {
      new WOW().init(),
        e.find(".wow").removeClass("wow"),
        e.find('[data-action="formscroll"]').each(function () {
          var e = $(this),
            a = e.closest(".section"),
            r = a.prevAll(".section"),
            n = a.nextAll(".section");
          (e.hasClass("btn") || e.hasClass("btn-meta")
            ? e
            : e.find(".btn, .btn-meta")
          ).on("click", function () {
            var e,
              t,
              i = n.find(".form:visible, [data-form]:visible").first();
            1 !== i.length
              ? 1 !==
                (e = a.find(".form:visible, [data-form]:visible").first())
                  .length
                ? 1 ===
                    (t = r.find(".form:visible, [data-form]:visible").last())
                      .length && creatium.scrollTo(t, -100)
                : creatium.scrollTo(e, -100)
              : creatium.scrollTo(i, -100);
          });
        }),
        e.find('a[href*="#"]').each(function () {
          var r = $(this),
            e = r.attr("href"),
            t = e.match(/(.*)#/)[1],
            n = e.match(/#.*/)[0];
          "#" !== n &&
            0 !== n.indexOf("#%7B%22") &&
            (((t = (t = (t = t.replace("https://" + location.host, "")).replace(
              "http://" + location.host,
              ""
            )).replace("//" + location.host, "")).length &&
              t !== location.pathname) ||
              creatium.lazy.add(r, function () {
                var i,
                  a = $(
                    '[id="' +
                      n.substr(1).replace(/"/g, '\\"') +
                      '"]:visible:first'
                  );
                a.length &&
                  ((i = r.children(
                    '.btn[data-highlight="true"], .btn-meta[data-highlight="true"]'
                  )).length &&
                    $(document).on("scroll", function () {
                      var e = a[0].getBoundingClientRect(),
                        t = window.innerHeight / 2;
                      e.top < t && e.bottom > t
                        ? i.hasClass("hover") || i.addClass("hover")
                        : i.hasClass("hover") && i.removeClass("hover");
                    }),
                  r.on("click", function (e) {
                    var t;
                    e.isDefaultPrevented() ||
                      ((t = r.closest(".is-expanded[cr-hamburger-menu]"))
                        .length && t.trigger("instant-hide"),
                      creatium.scrollTo(a),
                      e.preventDefault());
                  }));
              }));
        });
    }),
    creatium.init.local(function (e) {
      window.URL &&
        e
          .find("a.btn-legacy, a.btn-meta")
          .filter('[data-track-active="true"]')
          .each(function () {
            var e = $(this),
              i = new URL(location.href);
            try {
              var t = new URL(e.attr("href"), i);
            } catch (e) {
              return void console.error(e);
            }
            var a = t.origin === i.origin,
              r = t.pathname === i.pathname,
              n = !0;
            t.searchParams.forEach(function (e, t) {
              i.searchParams.get(t) !== e && (n = !1);
            }),
              a && r && n && e.addClass("active");
          });
    }),
    (function e() {
      return window.Snowfall
        ? void creatium.waitForAppear(".node[data-bgsnow]", function (e) {
            var t = $(e);
            t.data("bgsnow");
            t.removeAttr("data-bgsnow");
            e = new Snowfall({
              root: t.find("> .wrapper1 > .wrapper2").get(0),
              type: "text",
              content: ["*", "&#10052", "&#10053", "&#10054", "."],
              minSize: 10,
              maxSize: 30,
            });
            t.data("bgsnow", e);
          })
        : setTimeout(e, 50);
    })(),
    creatium.init.global(function () {
      var e,
        t = $(".section-zero.fullheight").filter(function () {
          var e = $(this);
          return (
            e.data("initial_height", parseInt(e.css("height"))),
            e.data("last_height", e.data("initial_height")),
            !0
          );
        }),
        i = $(".section.fullheight")
          .not(".section-zero")
          .filter(function () {
            var e = $(this),
              t = e.children(".padding_top");
            if (!t.length) return !1;
            var i = e.children(".padding_bottom");
            return (
              e.data("initial_padding_top", parseInt(t.css("padding-top"))),
              e.data(
                "initial_padding_bottom",
                parseInt(i.css("padding-bottom"))
              ),
              e.data("last_padding_top", e.data("initial_padding_top")),
              e.data("last_padding_bottom", e.data("initial_padding_bottom")),
              !0
            );
          });
      t.length + i.length !== 0 &&
        ((e = function () {
          t.each(function () {
            var e = $(this),
              t = e.find(".zero-grid, .zero-layer-axis").filter(function () {
                return $(this).closest(".node")[0] === e[0];
              }),
              i = e.data("initial_height"),
              a = e.data("last_height"),
              r = e.height(),
              r = a + (window.innerHeight - r);
            (r = r < i ? i : r) !== a &&
              (t.css("height", r), e.data("last_height", r));
          }),
            i.each(function () {
              var e,
                t,
                i = $(this),
                a = i.children(".padding_top"),
                r = i.children(".padding_bottom"),
                n = i.data("initial_padding_top"),
                o = i.data("initial_padding_bottom"),
                l = i.data("last_padding_top"),
                s = i.data("last_padding_bottom"),
                c = i.height(),
                d = window.innerHeight - c,
                c = "middle";
              i.hasClass("fullheight-top") && (c = "top"),
                "top" === (c = i.hasClass("fullheight-bottom") ? "bottom" : c)
                  ? ((e = l), (t = s + d))
                  : "middle" === c
                  ? ((e = l + d / 2), (t = s + d / 2))
                  : "bottom" === c && ((e = l + d), (t = s)),
                t < o && (t = o),
                (e = e < n ? n : e) !== l &&
                  (a.css("padding-top", e), i.data("last_padding_top", e)),
                t !== s &&
                  (r.css("padding-bottom", t),
                  i.data("last_padding_bottom", t));
            });
        }),
        $(window).on("resize", _.debounce(e, 100)),
        e());
    }),
    (zj = function (e) {
      var t;
      !0 !== zj.started &&
        ((t =
          { ru: "ru_RU", en: "en_US", uk: "uk_UA" }[creatium.lang] || "ru_RU"),
        $.getScript("https://api-maps.yandex.ru/2.1/?lang=" + t),
        (zj.started = !0)),
        window.ymaps
          ? ymaps.ready(e)
          : setTimeout(function () {
              zj(e);
            }, 250);
    }),
    (Aj = function (e, t) {
      var i;
      (e = e || "AIzaSyAldqEbYQZJSOeNYP1pDzg3Zx499U4NVAU"),
        !0 !== Aj.started &&
          ((i =
            {
              ru: "ru",
              en: "en",
              "pt-BR": "pt-BR",
              es: "es",
              "zh-CN": "zh-CN",
              de: "de",
              it: "it",
              fr: "fr",
              pl: "pl",
              lt: "lt",
              lv: "lv",
              bg: "bg",
              cs: "cs",
              he: "iw",
              el: "el",
              am: "hy",
              ge: "ka",
              ro: "ro",
              kz: "kk",
              uk: "uk",
            }[creatium.lang] || "en"),
          $.getScript(
            "https://maps.googleapis.com/maps/api/js?key=" +
              e +
              "&language=" +
              i +
              "&libraries=places"
          ),
          (Aj.started = !0)),
        window.google
          ? t()
          : setTimeout(function () {
              Aj(e, t);
            }, 250);
    }),
    creatium.init.local(function (e) {
      e.find(".macros-map").each(function () {
        var a = $(this).children(".map"),
          e = a.data("service");
        a.data("params");
        "yandex" === e
          ? creatium.lazy.add(a, function () {
              zj(function () {
                var e = a.data("params"),
                  t = new ymaps.Map(a.attr("id"), {
                    center: [+e.center[0] || 0, +e.center[1] || 0],
                    type: e.type,
                    zoom: +e.zoom || 0,
                    controls: [],
                  });
                t.behaviors.disable(["scrollZoom"]);
                e = new ymaps.GeoObject(
                  {
                    geometry: {
                      type: "Point",
                      coordinates: [+e.point[0] || 0, +e.point[1] || 0],
                    },
                  },
                  { draggable: !1 }
                );
                t.geoObjects.add(e),
                  t.controls
                    .add("zoomControl", {
                      float: "left",
                      position: { left: 10, top: 10 },
                    })
                    .add("typeSelector", { float: "right" });
              });
            })
          : "google" === e &&
            creatium.lazy.add(a, function () {
              var e = a.data("apikey"),
                t = a.data("params"),
                i =
                  [
                    48927, 104961, 118894, 118636, 112918, 43519, 120161,
                    110211, 7193, 103934, 116619, 120353, 37187, 109908, 105129,
                    110606, 110606, 111753, 83145, 106136, 121059, 119407,
                    103106, 111063, 120429, 77772, 80829, 90015, 122724, 119067,
                    171259, 510246,
                  ].indexOf(cr.site_id) < 0;
              e || i
                ? Aj(e, function () {
                    var e = new google.maps.Map(a[0], {
                      zoom: +t.zoom || 0,
                      center: new google.maps.LatLng(
                        +t.center[0] || 0,
                        +t.center[1] || 0
                      ),
                      mapTypeId: t.type,
                      fullscreenControl: !0,
                      rotateControl: !0,
                      streetViewControl: !1,
                      scrollwheel: !1,
                    });
                    new google.maps.Marker({
                      position: new google.maps.LatLng(
                        +t.point[0] || 0,
                        +t.point[1] || 0
                      ),
                      map: e,
                      draggable: !1,
                    });
                  })
                : ((e = [
                    "https://www.google.com/maps/embed/v1/place",
                    "?key=",
                    "AIzaSyBG-SGd9Wy2oReZV06Y2l7BSaDPN_F1Qec",
                    "&q=",
                    t.point[0] + "," + t.point[1],
                    "&center=",
                    t.center[0] + "," + t.center[1],
                    "&zoom=",
                    t.zoom,
                  ].join("")),
                  $("<iframe>").attr("src", e).appendTo(a));
            });
      });
    }),
    creatium.init.global(function () {
      var i, t, a;
      0 < location.href.indexOf("debug-size=1") &&
        ((t = i = 0),
        $(".node:not(.section-helper)").each(function () {
          var e = $(this).html().length;
          $(this)
            .find(".modal-link")
            .each(function () {
              e += $('.modal[data-uid="' + $(this).data("uid") + '"]').html()
                .length;
            }),
            $(this).is(".section") && ((i += e), (t = Math.max(t, e))),
            $(this).data("size", e);
        }),
        $(".section:not(.section-helper)").each(function () {
          var e = $(this).data("size"),
            t = Math.round((e / i) * 1e3) / 10;
          $("<div>")
            .css({
              background: "black",
              color: "white",
              padding: "10px",
              textAlign: "center",
            })
            .html(
              "↓ Размер секции: " + e + ". Это " + t + "% от всей страницы ↓"
            )
            .insertBefore(this);
        }),
        (a = $("<div>")
          .css({
            position: "fixed",
            background: "black",
            color: "white",
            padding: "10px",
            left: "20px",
            bottom: "20px",
            zIndex: 2e5,
          })
          .appendTo("body")),
        $(".area").mousemove(function (e) {
          $(".node").css("outline", "");
          var t = $(e.target).closest(".node");
          t.length &&
            (t.css("outline", "3px solid black"),
            (e = t.data("size")),
            (t = Math.round((e / i) * 1e3) / 10),
            a.show().text(e + ", " + t + "%"));
        })),
        $("body").on("click", ".debug-error[data-trace]", function (e) {
          var t = $(this),
            t = JSON.parse('"' + t.data("trace") + '"');
          $.fancybox.open('<div class="debug-error-trace">' + t + "</div>", {
            touch: !1,
          });
        });
    }),
    (creatium.cdn = {
      files: {},
      init: function () {
        $(document.body)
          .find(".component-js-fn")
          .each(function () {
            var e = $(this).data("cdn") || [];
            e.length ||
              e.forEach(function (e) {
                creatium.cdn.load(e, function () {});
              });
          });
      },
      isStyle: function (e) {
        return "css" === _.last(e.split("."));
      },
      isScript: function (e) {
        return "js" === _.last(e.split("."));
      },
      isLoaded: function (e) {
        return !!creatium.cdn.files[e] && creatium.cdn.files[e].loaded;
      },
      load: function (e, t) {
        creatium.cdn.files[e]
          ? creatium.cdn.files[e].loaded
            ? t()
            : creatium.cdn.files[e].callbacks.push(t)
          : ((creatium.cdn.files[e] = { loaded: !1, callbacks: [t] }),
            creatium.cdn.isStyle(e)
              ? creatium.cdn.loadStyle(e)
              : creatium.cdn.isScript(e)
              ? creatium.cdn.loadScript(e)
              : console.error("CDN file should be .js or .css"));
      },
      loadStyle: function (e) {
        var t = document.createElement("link");
        t.setAttribute("type", "text/css"),
          t.setAttribute("rel", "stylesheet"),
          t.setAttribute("href", e),
          document.head.appendChild(t),
          setTimeout(function () {
            (creatium.cdn.files[e].loaded = !0),
              creatium.cdn.files[e].callbacks.forEach(function (e) {
                e();
              });
          });
      },
      loadScript: function (e) {
        var t = document.createElement("script");
        (t.onload = function () {
          (creatium.cdn.files[e].loaded = !0),
            creatium.cdn.files[e].callbacks.forEach(function (e) {
              e();
            });
        }),
          (t.onerror = t.onload),
          t.setAttribute("async", ""),
          t.setAttribute("type", "text/javascript"),
          t.setAttribute("src", e),
          document.head.appendChild(t);
      },
    }),
    creatium.init.local(function (e) {
      window.requestAnimationFrame(function () {
        e.find(".component-js-fn").each(function () {
          var a = window["_component_js_" + $(this).data("name")],
            r = $(this).closest(".node")[0],
            n = $(this).data("lazy"),
            t = $(this).data("cdn") || [],
            e = $(this).data("sequentially"),
            o = $(this).data("static-params"),
            i = $(this).data("dynamic-params");
          for (const u in i) o[u] = { toString: () => i[u] };
          var t = t
              .map(function (e) {
                return e.trim();
              })
              .filter(function (e) {
                return e.length;
              }),
            l = function () {
              creatium.api(function (e) {
                var t,
                  i = function () {
                    try {
                      a(e, r, o);
                    } catch (e) {
                      console.error("Component JS error", this, e);
                    }
                  };
                $(r).hasClass("widget-field") &&
                  ((t = i),
                  (i = function () {
                    setTimeout(function () {
                      n ? e.waitForLazy(r, t) : t();
                    }, 10);
                  })),
                  n ? e.waitForLazy(r, i) : i();
              });
            },
            s = 0;
          function c(e, t) {
            s++,
              creatium.cdn.load(e, function () {
                s--, t instanceof Function ? t() : 0 === s && l();
              });
          }
          var d = function () {
            var e = t.find(function (e) {
              return creatium.cdn.isScript(e) && !creatium.cdn.isLoaded(e);
            });
            e ? c(e, d) : 0 === s && l();
          };
          t.length
            ? (t.forEach(function (e) {
                creatium.cdn.isStyle(e) && c(e);
              }),
              e
                ? d()
                : t.forEach(function (e) {
                    creatium.cdn.isScript(e) && c(e);
                  }))
            : l();
        });
      });
    }),
    (Sk = creatium.api.queue),
    (creatium.api = function (e, t) {
      if ((e instanceof Function && ((t = e), (e = "v1")), "v1" !== e))
        throw new Error("Unknown API version");
      if (creatium.api.initialized)
        try {
          t(creatium.api.v1.Page.create());
        } catch (e) {
          console.error(e);
        }
      else Sk.push([e, t]);
    }),
    (creatium.api.init = _.once(function () {
      (creatium.api.initialized = !0),
        Sk.forEach(function (e) {
          creatium.api(e[0], e[1]);
        }),
        $(creatium).triggerHandler("api-init");
    })),
    (creatium.api.v1 = {}),
    (creatium.api.v1.factory = function (e, t, i, a, r) {
      var n = {};
      e.forEach(function (e) {
        _.each(e.methods, function (e, t) {
          if (n.hasOwnProperty(t))
            throw new Error("Property " + t + " already exists");
          n[t] = e;
        });
      });
      var o = Object.create(n);
      return (
        Object.defineProperty(o, "classes", {
          value: _.without(_.map(e, "name"), "Emmiter"),
        }),
        e.forEach(function (e) {
          e.initialize.call(o, t, i, a, r);
        }),
        o
      );
    }),
    (creatium.api.v1.defineLazyProperty = function (t, i, a) {
      Object.defineProperty(t, i, {
        configurable: !0,
        get: function () {
          var e = a.call(this);
          return Object.defineProperty(t, i, { configurable: !1, value: e }), e;
        },
      });
    }),
    Object.defineProperty(window, "_page", {
      configurable: !0,
      get: function () {
        throw new Error("_page доступен только в консоли браузера");
      },
    }),
    setTimeout(function () {
      Object.defineProperty(window, "_page", {
        value: creatium.api.v1.Page.create(),
      });
    }, 5e3),
    (creatium.api.v1.Button = {
      name: "Button",
      initialize: function (e) {
        Object.defineProperty(this, "isActive", {
          get: function () {
            return e.find(".btn, .btn-meta").hasClass("active");
          },
        });
      },
      events: [],
      methods: {
        setActive: function (e) {
          e &&
            !this.isActive &&
            $(this.el).find(".btn, .btn-meta").addClass("active"),
            !e &&
              this.isActive &&
              $(this.el).find(".btn, .btn-meta").removeClass("active");
        },
      },
    }),
    (nl = creatium.api.v1),
    (nl.Cart = {
      name: "Cart",
      instance: null,
      initialize: function () {
        Object.defineProperty(this, "items", {
          get: function () {
            return creatium.cart.list.map(function (e) {
              return nl.CartItem.create(e);
            });
          },
        }),
          Object.defineProperty(this, "subtotal", {
            get: function () {
              var i = 0;
              return (
                _.each(creatium.cart.list, function (e) {
                  var t = +_.filter(e, { type: "amount" })[0].value,
                    e = _.filter(e, { type: "price" })[0].value;
                  i += creatium.cart.getPrice(e) * t;
                }),
                i
              );
            },
          }),
          $(creatium).on(
            "api-cart-item-add",
            function (e, t) {
              nl.Emmiter.emit(this, "item-add", null, {
                item: nl.CartItem.create(t),
              });
            }.bind(this)
          ),
          $(creatium).on(
            "api-cart-item-remove",
            function (e, t) {
              nl.Emmiter.emit(this, "item-remove", null, {
                item: nl.CartItem.create(t),
              });
            }.bind(this)
          );
        var a = this.subtotal;
        $(creatium).on(
          "cart-change",
          function (e, t) {
            var i = this.subtotal;
            a !== i &&
              (nl.Emmiter.emit(this, "subtotal-change", null, {
                oldSubtotal: a,
                subtotal: i,
              }),
              (a = i));
          }.bind(this)
        );
      },
      events: ["subtotal-change", "item-add", "item-remove"],
      methods: {
        addItem: function (e) {
          e = nl.CartItem.create([
            {
              name: "Название товара",
              type: "title",
              value: e.title || "Новый товар",
            },
            {
              name: "Цена товара",
              type: "price",
              value: e.price || "400 руб.",
            },
            { name: "Фото товара", type: "photo", value: e.image || null },
            { name: "Количество", type: "amount", value: e.quantity || 1 },
          ]);
          return creatium.cart.add(e._item, !0), e;
        },
        removeItem: function (e) {
          creatium.cart.list.indexOf(e._item) < 0
            ? console.error("Cart item is already removed")
            : creatium.cart.remove(e._item);
        },
      },
      create: function () {
        return (
          nl.Cart.instance ||
          ((nl.Cart.instance = nl.factory([nl.Emmiter, nl.Cart])),
          nl.Cart.instance)
        );
      },
    }),
    (El = creatium.api.v1),
    (El.CartItem = {
      name: "CartItem",
      instances: [],
      initialize: function (e) {
        Object.defineProperty(this, "_item", { value: e }),
          Object.defineProperty(this, "title", {
            get: function () {
              return _.filter(this._item, { type: "title" })[0].value;
            },
          }),
          Object.defineProperty(this, "price", {
            get: function () {
              return _.filter(this._item, { type: "price" })[0].value;
            },
          }),
          Object.defineProperty(this, "quantity", {
            get: function () {
              return _.filter(this._item, { type: "amount" })[0].value;
            },
          }),
          Object.defineProperty(this, "image", {
            get: function () {
              return _.filter(this._item, { type: "photo" })[0].value || null;
            },
          });
      },
      events: [],
      methods: {
        setTitle: function (e) {
          (_.filter(this._item, { type: "title" })[0].value = e),
            $(creatium).triggerHandler("cart-change");
        },
        setPrice: function (e) {
          (_.filter(this._item, { type: "price" })[0].value = e),
            $(creatium).triggerHandler("cart-change");
        },
        setQuantity: function (e) {
          (_.filter(this._item, { type: "amount" })[0].value = e),
            $(creatium).triggerHandler("cart-change");
        },
        setImage: function (e) {
          (_.filter(this._item, { type: "photo" })[0].value = e),
            $(creatium).triggerHandler("cart-change");
        },
      },
      create: function (t) {
        var e = El.CartItem.instances.find(function (e) {
          return e._item === t;
        });
        return (
          e ||
          ((e = El.factory([El.CartItem], t)), El.CartItem.instances.push(e), e)
        );
      },
    }),
    (Vl = creatium.api.v1),
    (Vl.Component = {
      name: "Component",
      initialize: function (e) {
        Object.defineProperty(this, "el", { value: e[0] });
      },
      events: [],
      methods: {
        getComponentsByClass: function (e) {
          return Vl.Page.instance.getComponentsByClass(e, this.el);
        },
        show: function () {
          $(this.el).show();
        },
        hide: function () {
          $(this.el).hide();
        },
      },
      create: function (e) {
        var t = e.data("api.Component");
        if (t) return t;
        if (!e.hasClass("node")) return null;
        e.hasClass("widget-form") &&
          console.error("Предупреждение: Старые формы не подключены к API"),
          "wait" === e.data("lazy-state") &&
            (creatium.lazy.trigger(e[0]), console.warn("Force lazy init", e));
        var i = [Vl.Emmiter, Vl.Component];
        return (
          e[0].classList.contains("section") && i.push(Vl.Section),
          e[0].classList.contains("section-slider") && i.push(Vl.Slider),
          e[0].classList.contains("widget-slider") && i.push(Vl.Slider),
          e[0].classList.contains("widget-tabs") && i.push(Vl.Slider),
          e[0].classList.contains("widget-spoiler") && i.push(Vl.Spoiler),
          e[0].classList.contains("widget-countdown") && i.push(Vl.Countdown),
          e[0].classList.contains("widget-form2") && i.push(Vl.Form),
          e[0].classList.contains("widget-field") && i.push(Vl.Field),
          e[0].classList.contains("widget-button") && i.push(Vl.Button),
          e[0].classList.contains("widget-menu-button") && i.push(Vl.Button),
          e[0].classList.contains("widget-hover") && i.push(Vl.Hover),
          (t = Vl.factory(i, e)),
          e.data("api.Component", t),
          t
        );
      },
    }),
    (_l = creatium.api.v1),
    (_l.Countdown = {
      name: "Countdown",
      initialize: function (e) {
        Object.defineProperty(this, "isExpired", {
          get: function () {
            return !0 === $(this.el).data("api-expired");
          },
        }),
          Object.defineProperty(this, "until", {
            get: function () {
              return $(this.el).data("api-until");
            },
          }),
          e.on(
            "api-tick",
            function () {
              _l.Emmiter.emit(this, "tick");
            }.bind(this)
          ),
          e.on(
            "api-expiry",
            function () {
              _l.Emmiter.emit(this, "expiry");
            }.bind(this)
          );
      },
      events: ["tick", "expiry"],
      methods: {
        setUntil: function (e) {
          $(this.el).data("api-setUntil")(e);
        },
      },
    }),
    (cm = creatium.api.v1),
    (cm.Emmiter = {
      name: "Emmiter",
      initialize: function () {
        Object.defineProperty(this, "_events", { value: {} }),
          this.classes.forEach(
            function (e) {
              cm[e].events &&
                cm[e].events.forEach(
                  function (e) {
                    Object.defineProperty(this._events, e, { value: [] });
                  }.bind(this)
                );
            }.bind(this)
          );
      },
      methods: {
        on: function (e, t) {
          this._events[e]
            ? this._events[e].push(t)
            : console.warn(
                'Предупреждение: События "' + e + '" не существует.'
              );
        },
        once: function (t, i) {
          this.on(
            t,
            function e() {
              this.off(t, e), i.apply(this, [].slice.call(arguments, 0));
            }.bind(this)
          );
        },
        off: function (e, t) {
          this._events[e] &&
            this._events[e].splice(this._events[e].indexOf(t) >>> 0, 1);
        },
      },
      emit: function (t, e, i, a) {
        if (!t._events[e]) throw new Error("No such event");
        var r = cm.Event.create(
          e,
          {
            prevent: (i = i || {}).prevent || _.noop,
            isPrevented: !0 === i.isPrevented,
          },
          a
        );
        t._events[e].slice().map(function (e) {
          try {
            e.call(t, r);
          } catch (e) {
            console.error(e);
          }
          i.intermediate && i.intermediate.call(t, r);
        });
      },
    }),
    (tm = creatium.api.v1),
    (tm.Event = {
      name: "Event",
      initialize: function (e, t, i) {
        _.each(
          i || {},
          function (e, t) {
            Object.defineProperty(this, t, { value: e });
          },
          this
        ),
          Object.defineProperty(this, "type", { value: e }),
          Object.defineProperty(this, "cancelable", {
            value: t.prevent instanceof Function,
          }),
          Object.defineProperty(this, "isPrevented", {
            configurable: !0,
            value: t.isPrevented || !1,
          }),
          Object.defineProperty(this, "prevent", {
            value: function () {
              this.cancelable &&
                !this.isPrevented &&
                (t.prevent(),
                Object.defineProperty(this, "isPrevented", { value: !0 }));
            }.bind(this),
          });
      },
      methods: {},
      create: function (e, t, i) {
        return tm.factory([tm.Event], e, t, i);
      },
    }),
    (Cm = creatium.api.v1),
    (Cm.Field = {
      name: "Field",
      initialize: function (e) {
        Object.defineProperty(this, "form", {
          value: Cm.Page.instance.getComponent(e.closest(".widget-form2")[0]),
        }),
          Object.defineProperty(this, "el", { value: e[0] });
        var t = e.find(".metahtml").data("vals");
        Object.defineProperty(this, "name", { value: t.text }),
          Object.defineProperty(this, "type", {
            value:
              "name" === t.type
                ? "name"
                : "phone" === t.type
                ? "phone"
                : "email" === t.type
                ? "email"
                : "password" === t.type
                ? "password"
                : void 0,
          }),
          Object.defineProperty(this, "uid", { value: t.id }),
          Object.defineProperty(this, "variable", { value: t.variable }),
          Object.defineProperty(this, "isRequired", { value: t.required }),
          Object.defineProperty(this, "hasCondition", {
            value: t.condition.length,
          }),
          Object.defineProperty(this, "value", {
            get: function () {
              return e.data("api-value");
            },
          }),
          Object.defineProperty(this, "isDisabled", {
            get: function () {
              return (
                e.data("api-disabledManually") ||
                e.data("api-disabledByCondition")
              );
            },
          }),
          e.on(
            "api-disable",
            function () {
              Cm.Emmiter.emit(this, "disable");
            }.bind(this)
          ),
          e.on(
            "api-enable",
            function () {
              Cm.Emmiter.emit(this, "enable");
            }.bind(this)
          ),
          e.on(
            "api-change",
            function () {
              Cm.Emmiter.emit(this, "change");
            }.bind(this)
          );
      },
      events: ["change", "disable", "enable"],
      methods: {
        disable: function () {
          $(this.el).data("api-disabledManually", !0),
            $(this.form.el).triggerHandler("input");
        },
        enable: function () {
          $(this.el).data("api-disabledManually", !0),
            $(this.form.el).triggerHandler("input");
        },
        setValue: function (e) {
          var t = $(this.el).data("api-setValue");
          t && t(e),
            this.form.__redrawRequested ||
              ((this.form.__redrawRequested = !0),
              window.requestAnimationFrame(
                function () {
                  $(this.form.el).triggerHandler("input"),
                    delete this.form.__redrawRequested;
                }.bind(this)
              ));
        },
        addValidationRule: function (e, t) {
          var i = $(this.el).data("api-validations") || [];
          i.push({ cb: e, message: t }), $(this.el).data("api-validations", i);
        },
        removeValidationRule: function (e) {
          var t = $(this.el).data("api-validations") || [];
          $(this.el).data("api-validations", _.without(t, { cb: e }));
        },
      },
    }),
    (Mm = creatium.api.v1),
    (Mm.Form = {
      name: "Form",
      initialize: function (e) {
        creatium.lazy.then(
          e,
          function e() {
            var t = $(this.el).data("api-swiper");
            if (!t) return setTimeout(e.bind(this), 100);
            t.on(
              "slideChangeTransitionStart",
              function () {
                Mm.Emmiter.emit(
                  this,
                  "before-step-change",
                  {
                    prevent: function () {
                      console.error("Отмена перелистывания еще не работает");
                    }.bind(this),
                  },
                  { previousIndex: t.previousIndex, activeIndex: t.activeIndex }
                );
              }.bind(this)
            ),
              t.on(
                "slideChangeTransitionEnd",
                function () {
                  Mm.Emmiter.emit(this, "step-change", null, {
                    previousIndex: t.previousIndex,
                    activeIndex: t.activeIndex,
                  });
                }.bind(this)
              );
          }.bind(this)
        ),
          Object.defineProperty(this, "name", {
            get: function () {
              return e.data("api-name");
            },
          }),
          Object.defineProperty(this, "isQuiz", {
            value: e.data("api-isQuiz"),
          }),
          Object.defineProperty(this, "isValid", {
            get: function () {
              return 0 === e.data("api-errors").length;
            },
          }),
          Mm.defineLazyProperty(this, "fields", function () {
            var i = [];
            return (
              _.each(
                e.data("api-$fields"),
                function (e, t) {
                  Mm.defineLazyProperty(
                    i,
                    t,
                    function () {
                      return Mm.Component.create($(e));
                    }.bind(this)
                  );
                }.bind(this)
              ),
              i
            );
          }),
          e.on(
            "api-submit",
            function (e, t, i) {
              Mm.Emmiter.emit(this, "submit", null, { orderId: t, fields: i });
            }.bind(this)
          );
      },
      events: ["before-submit", "submit", "before-step-change", "step-change"],
      methods: {
        recalculate: function () {
          $(this.el).trigger("input");
        },
        reset: function () {
          $(this.el).trigger("reset");
        },
        submit: function () {
          $(this.el).trigger("submit");
        },
        setName: function (e) {
          $(this.el).data("api-name", e.toString());
        },
      },
    }),
    (Xm = creatium.api.v1),
    (Xm.Hover = {
      name: "Hover",
      initialize: function (e) {
        e.on(
          "api-before-over",
          function () {
            Xm.Emmiter.emit(this, "before-over");
          }.bind(this)
        ),
          e.on(
            "api-over",
            function () {
              Xm.Emmiter.emit(this, "over");
            }.bind(this)
          ),
          e.on(
            "api-before-out",
            function () {
              Xm.Emmiter.emit(this, "before-out");
            }.bind(this)
          ),
          e.on(
            "api-out",
            function () {
              Xm.Emmiter.emit(this, "out");
            }.bind(this)
          );
      },
      events: ["before-over", "over", "before-out", "out"],
      methods: {},
    }),
    (Zm = creatium.api.v1),
    (Zm.Page = {
      name: "Page",
      instance: null,
      initialize: function () {
        Object.defineProperty(this, "id", { value: creatium.page_id }),
          Zm.defineLazyProperty(this, "cart", function () {
            return Zm.Cart.create();
          }),
          Object.defineProperty(this, "cookiesAccepted", {
            get: function () {
              return (
                0 <= document.cookie.indexOf("creatium-allow-cookies=yes") ||
                (!(0 <= document.cookie.indexOf("creatium-allow-cookies=no")) &&
                  null)
              );
            },
          }),
          $(creatium).on(
            "api-popup-show",
            function (e, t) {
              Zm.Emmiter.emit(this, "popup-show", null, {
                popup: Zm.Popup.create($(t.el)),
              });
            }.bind(this)
          ),
          $(creatium).on(
            "api-popup-hide",
            function (e, t) {
              Zm.Emmiter.emit(this, "popup-hide", null, {
                popup: Zm.Popup.create($(t.el)),
              });
            }.bind(this)
          ),
          $(creatium).on(
            "api-before-form-submit",
            function (e, t, i) {
              function a(e) {
                e.fields.forEach(function (e) {
                  "string" != typeof e.uid && (e.uid = "");
                });
              }
              function r(e) {
                t.data("api-prevent", !0);
              }
              var n = Zm.Component.create(t),
                o = i.map(function (e) {
                  return (
                    (e._key = _.uniqueId("field")),
                    { name: e.name, value: e.value, uid: e.id, _key: e._key }
                  );
                });
              Zm.Emmiter.emit(
                n,
                "before-submit",
                { intermediate: a, prevent: r },
                { fields: o }
              ),
                Zm.Emmiter.emit(
                  this,
                  "before-form-submit",
                  {
                    intermediate: a,
                    isPrevented: !0 === t.data("api-prevent"),
                    prevent: r,
                  },
                  { form: n, fields: o }
                );
              var l = _.clone(i);
              i.splice(0, i.length),
                o.forEach(function (e) {
                  var t;
                  (t = e._key ? _.find(l, { _key: e._key }) : t)
                    ? ((e.type = t.type), (e.required = t.required))
                    : ("number" == typeof e.type
                        ? (e.type = "number")
                        : (e.type = "string"),
                      (e.required = !1)),
                    i.push({
                      name: e.name,
                      value: e.value,
                      id: e.uid,
                      required: e.required,
                      type: e.type,
                    });
                });
            }.bind(this)
          ),
          $(creatium).on(
            "api-form-submit",
            function (e, t, i, a) {
              Zm.Emmiter.emit(this, "form-submit", null, {
                form: Zm.Component.create(t),
                orderId: i,
                fields: a,
              });
            }.bind(this)
          );
      },
      events: ["before-form-submit", "form-submit", "popup-show", "popup-hide"],
      methods: {
        waitForAppear: function (e, t) {
          return creatium.waitForAppear(e, t);
        },
        waitForLazy: function (e, i) {
          return creatium.waitForAppear(e, function (t) {
            var e = $(t);
            "wait" === e.data("lazy-state")
              ? e.one("lazy-trigger", function () {
                  i(e[0]);
                })
              : "done" === e.data("lazy-state")
              ? i(e[0])
              : creatium.lazy.add(e, function (e) {
                  i(t);
                });
          });
        },
        lazy: function (e, t) {
          return this.waitForLazy(e, t);
        },
        scrollTo: function (e, t) {
          if (
            !(
              (e =
                "string" == typeof e
                  ? document.getElementById(e)
                  : e) instanceof Element
            )
          )
            throw new Error("Unknown element");
          creatium.scrollTo($(e), t);
        },
        scrollToTop: function () {
          creatium.scrollTo($(".area"));
        },
        getPopup: function (e) {
          var t = $(".modal").filter(function () {
            return $(this).attr("data-id") === e;
          });
          return t.length ? Zm.Popup.create(t) : null;
        },
        getComponent: function (e) {
          if ("string" == typeof e) {
            if (!(a = document.getElementById(e)))
              for (var t = creatium.async.cuts, i = 0; i < t.length; i++)
                if (
                  !t[i].attached &&
                  null !== t[i].placeholder &&
                  0 !== t[i].key.indexOf("svg") &&
                  (t[i].el || (t[i].el = $.parseHTML(t[i].html)[0]),
                  (a = t[i].el.querySelector("#" + e)))
                ) {
                  creatium.lazy.trigger(t[i].placeholder);
                  break;
                }
          } else if (e instanceof Element) var a = e;
          else {
            if (!(e instanceof $ && e[0] instanceof Element)) return null;
            a = e[0];
          }
          return Zm.Component.create($(a));
        },
        getComponentsByClass: function (a, e) {
          e instanceof Element || (e = document);
          var r = [];
          return (
            e.querySelectorAll("div[data-cut], ." + a).forEach(function (e) {
              var t,
                i = e.getAttribute("data-cut");
              i
                ? ((i = _.find(creatium.async.cuts, { key: i })).el ||
                    (i.el = $.parseHTML(i.html)[0]),
                  (t = !1),
                  i.el.querySelectorAll("." + a).forEach(function (e) {
                    e = Zm.Page.instance.getComponent(e);
                    e && (r.push(e), (t = !0));
                  }),
                  t && creatium.lazy.trigger(i.placeholder))
                : (e = Zm.Page.instance.getComponent(e)) && r.push(e);
            }),
            r
          );
        },
        closeTopPopup: function () {
          creatium.modals.hide();
        },
        closeAllPopups: function () {
          creatium.modals.hideAll();
        },
        showSuccessMessage: function (e, t) {
          return creatium.msg_success(e, t);
        },
        showInformationMessage: function (e, t) {
          return creatium.msg_info(e, t);
        },
        showErrorMessage: function (e, t) {
          return creatium.msg_error(e, t);
        },
        createPortal: function (e) {
          return Zm.Portal.create(e);
        },
        acceptCookies: function () {
          $.get("/app/" + creatium.VERSION + "/cookie-consent?agree=yes");
        },
        declineCookies: function () {
          $.get("/app/" + creatium.VERSION + "/cookie-consent?agree=no");
        },
        lightbox: function (e) {
          try {
            creatium.fancybox(
              e.map(function (e) {
                return { src: e.src };
              }),
              0
            );
          } catch (e) {
            console.error("Lightbox error", e);
          }
        },
        uploadImage: function (e) {
          var t,
            i = new FormData();
          return (
            (t =
              e instanceof File
                ? e.name
                : (Date.now() + Math.random())
                    .toString(36)
                    .replace(/[^a-z]+/g, "") +
                  "." +
                  ({
                    "image/pjpeg": "jpg",
                    "image/jpeg": "jpg",
                    "image/gif": "gif",
                    "image/png": "png",
                    "image/webp": "webp",
                    "image/svg+xml": "svg",
                  }[e.type] || "jpg")),
            i.append("ImageUploadForm[image]", e, t),
            i.append("ImageUploadForm[page]", creatium.page_id.toString()),
            new Promise(function (a, t) {
              $.ajax({
                url: creatium.origin + "/app/" + creatium.VERSION + "/file",
                data: i,
                processData: !1,
                contentType: !1,
                type: "POST",
              })
                .then(function (t) {
                  var i;
                  t.match(/_size(\d+)x(\d+)/)
                    ? a(t)
                    : (((i = document.createElement("img")).onload =
                        function () {
                          var e = `?width=${i.clientWidth}&height=${i.clientHeight}`;
                          document.body.removeChild(i), a(t + e);
                        }),
                      (i.onerror = function () {
                        document.body.removeChild(i), a(t);
                      }),
                      (i.style.position = "absolute"),
                      (i.style.pointerEvents = "none"),
                      (i.style.visibility = "hidden"),
                      (i.style.left = "-10000px"),
                      (i.src = t),
                      document.body.appendChild(i));
                })
                .fail(function (e) {
                  console.error(e), t();
                });
            })
          );
        },
        uploadFile: function (e) {
          var a = new FormData(),
            t =
              e instanceof File
                ? e.name
                : (Date.now() + Math.random())
                    .toString(36)
                    .replace(/[^a-z]+/g, "");
          return (
            a.append("ImageUploadForm[image]", e, t),
            a.append("ImageUploadForm[page]", creatium.page_id.toString()),
            new Promise(function (t, i) {
              $.ajax({
                url: creatium.origin + "/app/" + creatium.VERSION + "/file",
                data: a,
                processData: !1,
                contentType: !1,
                type: "POST",
              })
                .then(function (e) {
                  t(e);
                })
                .fail(function (e) {
                  console.error(e), i();
                });
            })
          );
        },
      },
      create: function () {
        return (
          Zm.Page.instance ||
          ((Zm.Page.instance = Zm.factory([Zm.Emmiter, Zm.Page])),
          Zm.Page.instance)
        );
      },
    }),
    (wo = creatium.api.v1),
    (wo.Popup = {
      name: "Popup",
      initialize: function (e) {
        Object.defineProperty(this, "el", { value: e[0] }),
          Object.defineProperty(this, "id", {
            value: this.el.getAttribute("data-id"),
          }),
          Object.defineProperty(this, "_modal", { value: e.data("modal") }),
          e.on(
            "before-show",
            function () {
              wo.Emmiter.emit(this, "before-show", {
                prevent: function () {
                  this._modal.api_prevent = !0;
                }.bind(this),
              });
            }.bind(this)
          ),
          e.on(
            "show",
            function () {
              wo.Emmiter.emit(this, "show");
            }.bind(this)
          ),
          e.on(
            "before-hide",
            function () {
              wo.Emmiter.emit(this, "before-hide", {
                prevent: function () {
                  this._modal.api_prevent = !0;
                }.bind(this),
              });
            }.bind(this)
          ),
          e.on(
            "hide",
            function () {
              wo.Emmiter.emit(this, "hide");
            }.bind(this)
          ),
          Object.defineProperty(this, "isShown", {
            get: function () {
              return !!creatium.modals.list.find(
                function (e) {
                  return (e.el = this.el);
                }.bind(this)
              );
            },
          });
      },
      events: ["show", "hide", "before-hide", "before-show"],
      methods: {
        getComponentsByClass: function (e) {
          return (
            this._modal.attached ||
              console.warn("Предупреждение: Окно не прикреплено к странице."),
            wo.Page.instance.getComponentsByClass(e, this.el)
          );
        },
        attach: function () {
          creatium.modals.attach($(this.el));
        },
        show: function () {
          creatium.modals.show($(this.el));
        },
        hide: function () {
          creatium.modals.hide($(this.el));
        },
      },
      create: function (e) {
        var t = e.data("api.Popup");
        return (
          t ||
          ((t = wo.factory([wo.Emmiter, wo.Popup], e)),
          e.data("api.Popup", t),
          t)
        );
      },
    }),
    (Co = creatium.api.v1),
    (Co.Portal = {
      name: "Portal",
      initialize: function (e) {
        Object.defineProperty(this, "el", { value: e[0] });
      },
      events: [],
      methods: {},
      create: function (e) {
        var t = $('<div class="cr-portal">'),
          i = $(e).closest(".metahtml");
        return (
          i.length && t.addClass(i.attr("class")),
          $(e).closest(".modal").length
            ? t.appendTo(".area-wrapper").css("z-index", 900)
            : $(e).closest(".node.section").length &&
              t.appendTo(".area-wrapper").css("z-index", 805),
          t.data("portal-parent", e.parentElement),
          t.append(e),
          Co.factory([Co.Emmiter, Co.Portal], t)
        );
      },
    }),
    (Jo = creatium.api.v1),
    (Jo.Section = {
      name: "Section",
      initialize: function (e) {
        e.on(
          "fixation-change",
          function () {
            Jo.Emmiter.emit(this, "sticky-change", null, {
              isStuck: this.isStuck,
            });
          }.bind(this)
        ),
          Object.defineProperty(this, "isSticky", {
            value: $(this.el).hasClass("fixation"),
          }),
          Object.defineProperty(this, "isStuck", {
            get: function () {
              return this.el.classList.contains("fixed");
            },
          });
      },
      events: ["sticky-change"],
    }),
    (Lo = creatium.api.v1),
    (Lo.Slide = {
      name: "Slide",
      initialize: function (e, t) {
        Object.defineProperty(this, "slider", { value: t }),
          Object.defineProperty(this, "el", { value: e[0] }),
          Object.defineProperty(this, "index", {
            value: e.index(".swiper-slide"),
          }),
          Object.defineProperty(this, "isFirst", { value: 0 === this.index }),
          Object.defineProperty(this, "isLast", {
            value: this.index === this.slider.slides.length - 1,
          }),
          Object.defineProperty(this, "isActive", {
            get: function () {
              return this.slider.activeIndex === this.index;
            },
          });
      },
      events: [],
      methods: {
        slideTo: function () {
          return this.slider.slideTo(this.index);
        },
        getComponentsByClass: function (e) {
          return Lo.Page.instance.getComponentsByClass(e, this.el);
        },
      },
      create: function (e, t) {
        var i = e.data("api.Slide");
        return (
          i ||
          ((i = Lo.factory([Lo.Emmiter, Lo.Slide], e, t)),
          e.data("api.Slide", i),
          i)
        );
      },
    }),
    (So = creatium.api.v1),
    (So.Slider = {
      name: "Slider",
      initialize: function (e) {
        var t = $(this.el).data("api-swiper");
        t.on(
          "slideChangeTransitionStart",
          function () {
            So.Emmiter.emit(
              this,
              "before-slide-change",
              {
                prevent: function () {
                  console.error("Отмена перелистывания еще не работает");
                }.bind(this),
              },
              { previousIndex: t.previousIndex, activeIndex: t.activeIndex }
            );
          }.bind(this)
        ),
          t.on(
            "slideChangeTransitionEnd",
            function () {
              So.Emmiter.emit(this, "slide-change", null, {
                previousIndex: t.previousIndex,
                activeIndex: t.activeIndex,
              });
            }.bind(this)
          ),
          t.on(
            "slideNextTransitionStart",
            function () {
              So.Emmiter.emit(
                this,
                "before-slide-next",
                {
                  prevent: function () {
                    console.error("Отмена перелистывания еще не работает");
                  }.bind(this),
                },
                { previousIndex: t.previousIndex, activeIndex: t.activeIndex }
              );
            }.bind(this)
          ),
          t.on(
            "slideNextTransitionEnd",
            function () {
              So.Emmiter.emit(this, "slide-next", null, {
                previousIndex: t.previousIndex,
                activeIndex: t.activeIndex,
              });
            }.bind(this)
          ),
          t.on(
            "slidePrevTransitionStart",
            function () {
              So.Emmiter.emit(
                this,
                "before-slide-prev",
                {
                  prevent: function () {
                    console.error("Отмена перелистывания еще не работает");
                  }.bind(this),
                },
                { previousIndex: t.previousIndex, activeIndex: t.activeIndex }
              );
            }.bind(this)
          ),
          t.on(
            "slidePrevTransitionEnd",
            function () {
              So.Emmiter.emit(this, "slide-prev", null, {
                previousIndex: t.previousIndex,
                activeIndex: t.activeIndex,
              });
            }.bind(this)
          ),
          t.on(
            "reachEnd",
            function () {
              So.Emmiter.emit(this, "reach-end", null, {
                previousIndex: t.previousIndex,
                activeIndex: t.activeIndex,
              });
            }.bind(this)
          ),
          So.defineLazyProperty(this, "_swiper", function () {
            return $(this.el).data("api-swiper");
          }),
          So.defineLazyProperty(this, "slides", function () {
            var i = [];
            return (
              _.each(
                this._swiper.slides,
                function (e, t) {
                  So.defineLazyProperty(
                    i,
                    t,
                    function () {
                      return So.Slide.create($(e), this);
                    }.bind(this)
                  );
                }.bind(this)
              ),
              i
            );
          }),
          So.defineLazyProperty(this, "isLoop", function () {
            return !0 === this._swiper._params.loop;
          }),
          Object.defineProperty(this, "activeIndex", {
            get: function () {
              return this._swiper.activeIndex;
            },
          }),
          Object.defineProperty(this, "isAnimating", {
            get: function () {
              return this._swiper.animating;
            },
          }),
          Object.defineProperty(this, "isBeginning", {
            get: function () {
              return this._swiper.isBeginning;
            },
          }),
          Object.defineProperty(this, "isEnd", {
            get: function () {
              return this._swiper.isEnd;
            },
          });
      },
      events: [
        "before-slide-change",
        "slide-change",
        "before-slide-next",
        "slide-next",
        "before-slide-prev",
        "slide-prev",
        "reach-end",
      ],
      methods: {
        slideTo: function (e) {
          return (
            !(e < 0) &&
            !(e >= this.slides.length) &&
            e !== this.activeIndex &&
            (this._swiper.slideTo(e), !0)
          );
        },
        slideNext: function () {
          return $(this.el).triggerHandler("slidenext"), this.isAnimating;
        },
        slidePrev: function () {
          return $(this.el).triggerHandler("slideprev"), this.isAnimating;
        },
      },
    }),
    (Zo = creatium.api.v1),
    (Zo.Spoiler = {
      name: "Spoiler",
      initialize: function (t) {
        t.on(
          "api-before-toggle",
          function () {
            function e() {
              t.data("api-prevent", !0);
            }
            this.isCollapsed
              ? Zo.Emmiter.emit(this, "before-expand", { prevent: e })
              : Zo.Emmiter.emit(this, "before-collapse", { prevent: e }),
              Zo.Emmiter.emit(this, "before-toggle", { prevent: e });
          }.bind(this)
        ),
          t.on(
            "api-toggle",
            function () {
              Object.defineProperty(this, "isCollapsed", {
                configurable: !0,
                value: !this.isCollapsed,
              }),
                this.isCollapsed
                  ? Zo.Emmiter.emit(this, "collapse")
                  : Zo.Emmiter.emit(this, "expand"),
                Zo.Emmiter.emit(this, "toggle");
            }.bind(this)
          ),
          Object.defineProperty(this, "isCollapsed", {
            configurable: !0,
            value: t.data("api-isCollapsed"),
          });
      },
      events: [
        "before-collapse",
        "collapse",
        "before-expand",
        "expand",
        "before-toggle",
        "toggle",
      ],
      methods: {
        collapse: function () {
          this.isCollapsed || $(this.el).triggerHandler("toggle");
        },
        expand: function () {
          this.isCollapsed && $(this.el).triggerHandler("toggle");
        },
        toggle: function () {
          $(this.el).triggerHandler("toggle");
        },
      },
    });
})($, _);
