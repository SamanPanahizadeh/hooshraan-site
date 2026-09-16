// =========================================================
// اسکریپت‌های تعاملی وب‌سایت هوشران
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. تغییر وضعیت نوبار در اسکرول
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                navbar.classList.add('is-scrolled');
            } else {
                navbar.classList.remove('is-scrolled');
            }
        }, { passive: true });
    }

    // 2. منوی ریسپانسیو موبایل
    const toggleBtn = document.querySelector('.navbar__toggle');
    const menu = document.querySelector('.navbar__menu');
    if (toggleBtn && menu) {
        toggleBtn.addEventListener('click', () => {
            menu.classList.toggle('is-open');
        });

        // بستن منو هنگام کلیک روی لینک‌ها
        menu.querySelectorAll('.navbar__link').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('is-open');
            });
        });
    }

    // 3. آکاردئون سرفصل‌های دوره
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        if (!header) return;
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('is-active');
            
            // بستن بقیه آیتم‌ها برای تمرکز
            accordionItems.forEach(otherItem => {
                otherItem.classList.remove('is-active');
            });

            if (!isActive) {
                item.classList.add('is-active');
            }
        });
    });

    // 4. توابع اعتبارسنجی دقیق فرم تماس
    function toEnglishDigits(str) {
        if (!str) return '';
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        let res = str.toString();
        for (let i = 0; i < 10; i++) {
            res = res.replace(new RegExp(persianDigits[i], 'g'), i)
                     .replace(new RegExp(arabicDigits[i], 'g'), i);
        }
        return res;
    }

    // اعتبارسنجی نام (الزامی)
    function validateName(val) {
        const trimmed = (val || '').trim();
        if (!trimmed) {
            return { valid: false, message: 'وارد کردن نام و نام خانوادگی الزامی است.' };
        }
        const onlyDigits = /^[0-9\u06F0-\u06F9\u0660-\u0669\s\-_.]+$/.test(trimmed);
        if (onlyDigits) {
            return { valid: false, message: 'نام نمی‌تواند صرفاً از اعداد باشد؛ لطفاً نام واقعی خود را با حروف الفبا وارد کنید.' };
        }
        const letters = trimmed.match(/[\u0600-\u06FFa-zA-Z]/g) || [];
        if (letters.length < 2) {
            return { valid: false, message: 'نام و نام خانوادگی باید حداقل شامل ۲ حرف باشد.' };
        }
        return { valid: true, value: trimmed };
    }

    // اعتبارسنجی شماره همراه (الزامی، ۱۱ رقم، شروع با ۰۹)
    function validatePhone(val) {
        const raw = (val || '').trim();
        if (!raw) {
            return { valid: false, message: 'وارد کردن شماره همراه الزامی است.' };
        }

        let clean = toEnglishDigits(raw).replace(/[\s\-_()+]/g, '');

        if (clean.startsWith('0098')) {
            clean = '0' + clean.slice(4);
        } else if (clean.startsWith('98') && clean.length === 12) {
            clean = '0' + clean.slice(2);
        } else if (clean.startsWith('9') && clean.length === 10) {
            clean = '0' + clean;
        }

        if (!/^\d+$/.test(clean)) {
            return { valid: false, message: 'شماره همراه فقط باید شامل ارقام عددی باشد.' };
        }

        const iranMobileRegex = /^09\d{9}$/;
        if (!iranMobileRegex.test(clean)) {
            return { valid: false, message: 'شماره همراه نامعتبر است. لطفاً یک شماره موبایل معتبر ۱۱ رقمی وارد کنید (مثال: ۰۹۱۲۳۴۵۶۷۸۹).' };
        }

        return { valid: true, value: clean };
    }

    // اعتبارسنجی ایمیل (الزامی، فرمت دقیق RFC)
    function validateEmail(val) {
        const trimmed = (val || '').trim();
        if (!trimmed) {
            return { valid: false, message: 'وارد کردن آدرس ایمیل الزامی است.' };
        }

        if (/[\s\u0600-\u06FF]/.test(trimmed)) {
            return { valid: false, message: 'آدرس ایمیل نباید شامل فاصله یا حروف فارسی باشد.' };
        }

        const parts = trimmed.split('@');
        if (parts.length !== 2 || !parts[0] || !parts[1] || !parts[1].includes('.')) {
            return { valid: false, message: 'فرمت آدرس ایمیل ناقص است (مثال: name@company.com).' };
        }

        const domainParts = parts[1].split('.');
        const tld = domainParts[domainParts.length - 1];
        if (!tld || tld.length < 2 || !/^[a-zA-Z]{2,24}$/.test(tld)) {
            return { valid: false, message: 'پسوند دامنه ایمیل نامعتبر است (مانند com, ir, org).' };
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(trimmed)) {
            return { valid: false, message: 'آدرس ایمیل وارد شده معتبر نیست. لطفاً یک ایمیل معتبر وارد کنید (مثال: name@company.com).' };
        }

        return { valid: true, value: trimmed };
    }

    // اعتبارسنجی نام سازمان (الزامی)
    function validateOrg(val) {
        const trimmed = (val || '').trim();
        if (!trimmed) {
            return { valid: false, message: 'وارد کردن نام سازمان یا کسب‌وکار الزامی است.' };
        }
        const onlyDigits = /^[0-9\u06F0-\u06F9\u0660-\u0669\s\-_.]+$/.test(trimmed);
        if (onlyDigits) {
            return { valid: false, message: 'نام سازمان نمی‌تواند صرفاً از اعداد باشد؛ باید حداقل ۲ حرف الفبا داشته باشد.' };
        }
        const letters = trimmed.match(/[\u0600-\u06FFa-zA-Z]/g) || [];
        if (letters.length < 2) {
            return { valid: false, message: 'نام سازمان یا کسب‌وکار باید حداقل شامل ۲ حرف باشد.' };
        }
        return { valid: true, value: trimmed };
    }

    // فیلد توضیحات (اختیاری)
    function sanitizeMessage(val) {
        const trimmed = (val || '').trim();
        return trimmed.length > 0 ? trimmed : 'توضیحاتی قید نشده است';
    }

    // هندلینگ ارسال فرم تماس و دیسپچ به تلگرام @houshraan_Sup
    const contactForm = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    if (contactForm && feedback) {
        const nameInput = document.getElementById('c-name');
        const phoneInput = document.getElementById('c-phone');
        const emailInput = document.getElementById('c-email');
        const orgInput = document.getElementById('c-org');
        const msgInput = document.getElementById('c-message');
        const submitBtn = document.getElementById('c-submit-btn');

        const nameErr = document.getElementById('c-name-err');
        const phoneErr = document.getElementById('c-phone-err');
        const emailErr = document.getElementById('c-email-err');
        const orgErr = document.getElementById('c-org-err');

        function setFieldError(inputEl, errEl, message) {
            if (inputEl) inputEl.classList.add('input-has-error');
            if (errEl) {
                errEl.innerText = message;
                errEl.style.display = 'block';
            }
        }

        function clearFieldError(inputEl, errEl) {
            if (inputEl) inputEl.classList.remove('input-has-error');
            if (errEl) {
                errEl.innerText = '';
                errEl.style.display = 'none';
            }
        }

        // بررسی وضعیت آمادگی ۴ فیلد الزامی برای فعال‌سازی دکمه ارسال
        function checkAllMandatoryFields() {
            const isNameOk = validateName(nameInput ? nameInput.value : '').valid;
            const isPhoneOk = validatePhone(phoneInput ? phoneInput.value : '').valid;
            const isEmailOk = validateEmail(emailInput ? emailInput.value : '').valid;
            const isOrgOk = validateOrg(orgInput ? orgInput.value : '').valid;

            return isNameOk && isPhoneOk && isEmailOk && isOrgOk;
        }

        function updateSubmitButtonState() {
            if (!submitBtn) return;
            const isReady = checkAllMandatoryFields();
            if (isReady) {
                submitBtn.removeAttribute('disabled');
                submitBtn.title = 'برای ارسال درخواست در تلگرام کلیک کنید';
            } else {
                submitBtn.setAttribute('disabled', 'true');
                submitBtn.title = 'لطفاً ۴ فیلد ستاره‌دار الزامی را تکمیل فرمایید تا دکمه فعال شود';
            }
        }

        // پیگیری تغییرات بلادرنگ در ۴ فیلد الزامی
        function setupLiveField(inputEl, errEl, validatorFn) {
            if (!inputEl) return;

            // هنگام تایپ کاربر
            inputEl.addEventListener('input', () => {
                const res = validatorFn(inputEl.value);
                if (res.valid) {
                    clearFieldError(inputEl, errEl);
                }
                updateSubmitButtonState();
            });

            // هنگام خروج از فیلد (Blur)
            inputEl.addEventListener('blur', () => {
                const rawVal = inputEl.value.trim();
                if (rawVal.length > 0) {
                    const res = validatorFn(inputEl.value);
                    if (!res.valid) {
                        setFieldError(inputEl, errEl, res.message);
                    } else {
                        clearFieldError(inputEl, errEl);
                    }
                }
                updateSubmitButtonState();
            });
        }

        setupLiveField(nameInput, nameErr, validateName);
        setupLiveField(phoneInput, phoneErr, validatePhone);
        setupLiveField(emailInput, emailErr, validateEmail);
        setupLiveField(orgInput, orgErr, validateOrg);

        // اجرای اولیه برای تنظیم وضعیت دکمه
        updateSubmitButtonState();

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // بررسی مجدد اعتبارسنجی‌ها
            const resName = validateName(nameInput ? nameInput.value : '');
            const resPhone = validatePhone(phoneInput ? phoneInput.value : '');
            const resEmail = validateEmail(emailInput ? emailInput.value : '');
            const resOrg = validateOrg(orgInput ? orgInput.value : '');
            const messageText = sanitizeMessage(msgInput ? msgInput.value : '');

            let hasError = false;
            let firstInvalidEl = null;

            if (!resName.valid) {
                setFieldError(nameInput, nameErr, resName.message);
                hasError = true;
                if (!firstInvalidEl) firstInvalidEl = nameInput;
            } else {
                clearFieldError(nameInput, nameErr);
            }

            if (!resPhone.valid) {
                setFieldError(phoneInput, phoneErr, resPhone.message);
                hasError = true;
                if (!firstInvalidEl) firstInvalidEl = phoneInput;
            } else {
                clearFieldError(phoneInput, phoneErr);
            }

            if (!resEmail.valid) {
                setFieldError(emailInput, emailErr, resEmail.message);
                hasError = true;
                if (!firstInvalidEl) firstInvalidEl = emailInput;
            } else {
                clearFieldError(emailInput, emailErr);
            }

            if (!resOrg.valid) {
                setFieldError(orgInput, orgErr, resOrg.message);
                hasError = true;
                if (!firstInvalidEl) firstInvalidEl = orgInput;
            } else {
                clearFieldError(orgInput, orgErr);
            }

            if (hasError) {
                updateSubmitButtonState();
                if (firstInvalidEl) {
                    firstInvalidEl.focus();
                }
                return;
            }

            // ۴ فیلد الزامی کاملاً معتبر است؛ تهیه پیام تلگرام
            const originalBtnHtml = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerText = 'در حال باز کردن تلگرام پشتیبانی...';

            const nowFa = new Date().toLocaleDateString('fa-IR');
            const telegramMessage = 
`سلام، درخواست ارتباط و مشاوره از وب‌سایت هوشران (houshraan.ir):

👤 نام و نام خانوادگی: ${resName.value}
📱 شماره همراه: ${resPhone.value}
✉️ ایمیل: ${resEmail.value}
🏢 سازمان / کسب‌وکار: ${resOrg.value}

📝 توضیحات و نیازها:
${messageText}

📅 تاریخ ثبت: ${nowFa}`;

            const telegramUrl = `https://t.me/houshraan_Sup?text=${encodeURIComponent(telegramMessage)}`;

            // باز کردن مستقیم صفحه چت تلگرام در پنجره جدید
            window.open(telegramUrl, '_blank');

            // نمایش پیام موفقیت با دکمه دسترسی مستقیم در صفحه
            feedback.style.display = 'block';
            feedback.innerHTML = `
                <div class="form-feedback-card">
                    <div class="form-feedback-card__header">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        <span>اطلاعات شما با موفقیت تایید شد!</span>
                    </div>
                    <p class="form-feedback-card__desc">
                        پیام با فرمت کامل آماده گردید و صفحه پشتیبانی هوشران در تلگرام (<strong>@houshraan_Sup</strong>) فراخوانی شد.
                    </p>
                    <div class="form-feedback-card__action">
                        <a href="${telegramUrl}" target="_blank" rel="noopener noreferrer" class="btn-telegram-open">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.99 1.27-5.63 3.72-.53.36-1.02.54-1.45.53-.48-.01-1.41-.27-2.1-.5-.85-.27-1.53-.42-1.47-.89.03-.25.38-.51 1.07-.78 4.2-1.82 7-3.03 8.4-3.61 4-.1.67 1.33.6 1.48z"/></svg>
                            ارسال در تلگرام به @houshraan_Sup
                        </a>
                    </div>
                </div>
            `;

            // بازنشانی دکمه فرم
            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnHtml;
                    updateSubmitButtonState();
                }
            }, 1000);
        });
    }

    // 5. راه‌اندازی انیمیشن‌های AOS در صورت وجود
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 80,
            easing: 'ease-out-cubic'
        });
    }
});
