// =========================================================
// موتور خودارزیابی تک‌سوالی هوشران (Single-Question Focus Engine)
// =========================================================

const DIMENSIONS = [
  {
    "key": "strategy",
    "titleFa": "استراتژی و رهبری",
    "titleEn": "Strategy & Leadership",
    "weight": 15,
    "description": "همسویی اهداف، تصمیم‌گیری و حمایت مدیران ارشد"
  },
  {
    "key": "business_value",
    "titleFa": "ارزش کسب‌وکار و کاربردها",
    "titleEn": "Business Value & Use Cases",
    "weight": 20,
    "description": "اولویت‌بندی مسائل، بازدهی و بازطراحی جریان کار"
  },
  {
    "key": "people",
    "titleFa": "افراد، مهارت و فرهنگ",
    "titleEn": "People, Skills & Culture",
    "weight": 15,
    "description": "سواد هوش مصنوعی، آموزش نقش‌محور و ارزیابی خروجی"
  },
  {
    "key": "governance",
    "titleFa": "حاکمیت، ریسک و اعتماد",
    "titleEn": "Governance, Risk & Trust",
    "weight": 15,
    "description": "امنیت داده‌ها، خط‌مشی مکتوب و نظارت انسانی"
  },
  {
    "key": "data",
    "titleFa": "آمادگی داده",
    "titleEn": "Data Readiness",
    "weight": 15,
    "description": "دسترسی، کیفیت و یکپارچگی داده‌های سازمانی"
  },
  {
    "key": "technology",
    "titleFa": "فناوری و مهندسی",
    "titleEn": "Technology & Engineering",
    "weight": 10,
    "description": "زیرساخت ابزارها، اتصال سیستم‌ها و مقیاس‌پذیری"
  },
  {
    "key": "operating_model",
    "titleFa": "سازمان و مدل عملیاتی",
    "titleEn": "Organization & Operating Model",
    "weight": 10,
    "description": "سازوکار تصمیم‌گیری و اداره چرخه حیات پروژه‌ها"
  }
];
const QUESTIONS = [
  {
    "code": "S01",
    "dimensionKey": "strategy",
    "dimensionTitleFa": "استراتژی و رهبری",
    "dimensionTitleEn": "Strategy & Leadership",
    "weight": 15,
    "question": "آیا استراتژی یا برنامه مشخص و مستندی برای استفاده از AI در سازمان وجود دارد؟"
  },
  {
    "code": "S02",
    "dimensionKey": "strategy",
    "dimensionTitleFa": "استراتژی و رهبری",
    "dimensionTitleEn": "Strategy & Leadership",
    "weight": 15,
    "question": "استفاده از AI تا چه حد به اهداف و اولویت‌های اصلی کسب‌وکار متصل شده است؟"
  },
  {
    "code": "S03",
    "dimensionKey": "strategy",
    "dimensionTitleFa": "استراتژی و رهبری",
    "dimensionTitleEn": "Strategy & Leadership",
    "weight": 15,
    "question": "مدیران ارشد تا چه حد به‌صورت فعال از AI حمایت می‌کنند و در تصمیم‌های مرتبط با آن مشارکت دارند؟"
  },
  {
    "code": "S04",
    "dimensionKey": "strategy",
    "dimensionTitleFa": "استراتژی و رهبری",
    "dimensionTitleEn": "Strategy & Leadership",
    "weight": 15,
    "question": "مالکیت و پاسخ‌گویی (accountability) برای تصمیم‌ها و نتایج مرتبط با AI تا چه حد روشن است؟"
  },
  {
    "code": "S05",
    "dimensionKey": "strategy",
    "dimensionTitleFa": "استراتژی و رهبری",
    "dimensionTitleEn": "Strategy & Leadership",
    "weight": 15,
    "question": "بودجه و منابع موردنیاز برای اولویت‌های AI تا چه حد در برنامه‌ریزی سازمانی دیده شده است؟"
  },
  {
    "code": "S06",
    "dimensionKey": "business_value",
    "dimensionTitleFa": "ارزش کسب‌وکار و Use Caseها",
    "dimensionTitleEn": "Business Value & Use Cases",
    "weight": 20,
    "question": "سازمان تا چه حد use caseهای AI را از روی مسائل و فرصت‌های واقعی کسب‌وکار شناسایی می‌کند؟"
  },
  {
    "code": "S07",
    "dimensionKey": "business_value",
    "dimensionTitleFa": "ارزش کسب‌وکار و Use Caseها",
    "dimensionTitleEn": "Business Value & Use Cases",
    "weight": 20,
    "question": "آیا use caseهای AI با معیارهای مشخصی مانند ارزش، امکان‌پذیری، ریسک و آمادگی داده اولویت‌بندی می‌شوند؟"
  },
  {
    "code": "S08",
    "dimensionKey": "business_value",
    "dimensionTitleFa": "ارزش کسب‌وکار و Use Caseها",
    "dimensionTitleEn": "Business Value & Use Cases",
    "weight": 20,
    "question": "برای use caseهای مهم، پیش از اجرا outcome و KPI قابل اندازه‌گیری تعریف می‌شود؟"
  },
  {
    "code": "S09",
    "dimensionKey": "business_value",
    "dimensionTitleFa": "ارزش کسب‌وکار و Use Caseها",
    "dimensionTitleEn": "Business Value & Use Cases",
    "weight": 20,
    "question": "پس از اجرا، ارزش کسب‌شده یا ROI use caseهای AI اندازه‌گیری و با هدف اولیه مقایسه می‌شود؟"
  },
  {
    "code": "S10",
    "dimensionKey": "business_value",
    "dimensionTitleFa": "ارزش کسب‌وکار و Use Caseها",
    "dimensionTitleEn": "Business Value & Use Cases",
    "weight": 20,
    "question": "سازمان تصمیم مشخصی برای انتقال، توسعه یا توقف pilotهای AI بر اساس شواهد دارد؟"
  },
  {
    "code": "S11",
    "dimensionKey": "business_value",
    "dimensionTitleFa": "ارزش کسب‌وکار و Use Caseها",
    "dimensionTitleEn": "Business Value & Use Cases",
    "weight": 20,
    "question": "استفاده از AI تا چه حد به بازطراحی workflowها و نحوه انجام کار منجر شده است؟"
  },
  {
    "code": "S12",
    "dimensionKey": "business_value",
    "dimensionTitleFa": "ارزش کسب‌وکار و Use Caseها",
    "dimensionTitleEn": "Business Value & Use Cases",
    "weight": 20,
    "question": "AI تا چه حد در ایجاد یا بهبود محصولات، خدمات یا منابع درآمدی جدید نقش دارد؟"
  },
  {
    "code": "S13",
    "dimensionKey": "people",
    "dimensionTitleFa": "افراد، مهارت و فرهنگ",
    "dimensionTitleEn": "People, Skills & Culture",
    "weight": 15,
    "question": "سطح AI literacy کارکنان در نقش‌های مختلف تا چه حد برای استفاده مسئولانه و مؤثر کافی است؟"
  },
  {
    "code": "S14",
    "dimensionKey": "people",
    "dimensionTitleFa": "افراد، مهارت و فرهنگ",
    "dimensionTitleEn": "People, Skills & Culture",
    "weight": 15,
    "question": "آموزش و توسعه مهارت AI تا چه حد بر اساس نقش و نوع کار افراد طراحی شده است؟"
  },
  {
    "code": "S15",
    "dimensionKey": "people",
    "dimensionTitleFa": "افراد، مهارت و فرهنگ",
    "dimensionTitleEn": "People, Skills & Culture",
    "weight": 15,
    "question": "کارکنان تا چه حد توانایی ارزیابی خروجی AI، تشخیص خطا و تشخیص زمان نیاز به قضاوت انسانی را دارند؟"
  },
  {
    "code": "S16",
    "dimensionKey": "people",
    "dimensionTitleFa": "افراد، مهارت و فرهنگ",
    "dimensionTitleEn": "People, Skills & Culture",
    "weight": 15,
    "question": "استفاده واقعی و adoption ابزارها و workflowهای AI تا چه حد اندازه‌گیری می‌شود؟"
  },
  {
    "code": "S17",
    "dimensionKey": "people",
    "dimensionTitleFa": "افراد، مهارت و فرهنگ",
    "dimensionTitleEn": "People, Skills & Culture",
    "weight": 15,
    "question": "سازمان برای مدیریت تغییر، ایجاد champions و انتقال تجربه‌های موفق AI سازوکار مشخص دارد؟"
  },
  {
    "code": "S18",
    "dimensionKey": "people",
    "dimensionTitleFa": "افراد، مهارت و فرهنگ",
    "dimensionTitleEn": "People, Skills & Culture",
    "weight": 15,
    "question": "یادگیری و بهبود استفاده از AI به‌صورت مستمر در برنامه توسعه افراد و شیوه‌های کاری تقویت می‌شود؟"
  },
  {
    "code": "S19",
    "dimensionKey": "governance",
    "dimensionTitleFa": "حاکمیت، ریسک و اعتماد",
    "dimensionTitleEn": "Governance, Risk & Trust",
    "weight": 15,
    "question": "آیا سازمان policy مکتوب، قابل فهم و قابل اجرا برای استفاده از AI دارد؟"
  },
  {
    "code": "S20",
    "dimensionKey": "governance",
    "dimensionTitleFa": "حاکمیت، ریسک و اعتماد",
    "dimensionTitleEn": "Governance, Risk & Trust",
    "weight": 15,
    "question": "قواعد استفاده از اطلاعات محرمانه، شخصی و حساس در ابزارها و سیستم‌های AI روشن و اجرایی است؟"
  },
  {
    "code": "S21",
    "dimensionKey": "governance",
    "dimensionTitleFa": "حاکمیت، ریسک و اعتماد",
    "dimensionTitleEn": "Governance, Risk & Trust",
    "weight": 15,
    "question": "use caseهای AI بر اساس سطح ریسک طبقه‌بندی می‌شوند و برای موارد پرریسک approval مشخص وجود دارد؟"
  },
  {
    "code": "S22",
    "dimensionKey": "governance",
    "dimensionTitleFa": "حاکمیت، ریسک و اعتماد",
    "dimensionTitleEn": "Governance, Risk & Trust",
    "weight": 15,
    "question": "برای خروجی‌ها یا تصمیم‌های حساس AI، human oversight و مسیر escalation مشخص شده است؟"
  },
  {
    "code": "S23",
    "dimensionKey": "governance",
    "dimensionTitleFa": "حاکمیت، ریسک و اعتماد",
    "dimensionTitleEn": "Governance, Risk & Trust",
    "weight": 15,
    "question": "سیستم‌ها و use caseهای AI پس از استقرار از نظر کیفیت، ریسک، امنیت و عملکرد پایش و بازبینی می‌شوند؟"
  },
  {
    "code": "S24",
    "dimensionKey": "governance",
    "dimensionTitleFa": "حاکمیت، ریسک و اعتماد",
    "dimensionTitleEn": "Governance, Risk & Trust",
    "weight": 15,
    "question": "نقش و مسئولیت business، IT، security، legal، HR و سایر ذی‌نفعان در governance AI روشن است؟"
  },
  {
    "code": "S25",
    "dimensionKey": "data",
    "dimensionTitleFa": "آمادگی داده",
    "dimensionTitleEn": "Data Readiness",
    "weight": 15,
    "question": "داده موردنیاز use caseهای اولویت‌دار تا چه حد در دسترس و قابل استفاده است؟"
  },
  {
    "code": "S26",
    "dimensionKey": "data",
    "dimensionTitleFa": "آمادگی داده",
    "dimensionTitleEn": "Data Readiness",
    "weight": 15,
    "question": "کیفیت، کامل‌بودن و consistency داده‌های موردنیاز AI تا چه حد قابل اتکاست؟"
  },
  {
    "code": "S27",
    "dimensionKey": "data",
    "dimensionTitleFa": "آمادگی داده",
    "dimensionTitleEn": "Data Readiness",
    "weight": 15,
    "question": "مالکیت داده، lineage و مسئولیت نگهداری و دسترسی به داده‌ها تا چه حد مشخص است؟"
  },
  {
    "code": "S28",
    "dimensionKey": "data",
    "dimensionTitleFa": "آمادگی داده",
    "dimensionTitleEn": "Data Readiness",
    "weight": 15,
    "question": "دسترسی به داده‌ها برای AI تا چه حد کنترل‌شده، قابل ردیابی و متناسب با سطح دسترسی است؟"
  },
  {
    "code": "S29",
    "dimensionKey": "data",
    "dimensionTitleFa": "آمادگی داده",
    "dimensionTitleEn": "Data Readiness",
    "weight": 15,
    "question": "داده‌های موردنیاز بین سیستم‌های کلیدی تا چه حد قابل اتصال و یکپارچه‌سازی هستند؟"
  },
  {
    "code": "S30",
    "dimensionKey": "technology",
    "dimensionTitleFa": "فناوری و مهندسی",
    "dimensionTitleEn": "Technology & Engineering",
    "weight": 10,
    "question": "آیا سازمان مجموعه‌ای از ابزارها و پلتفرم‌های AI مورد تأیید و قابل پشتیبانی دارد؟"
  },
  {
    "code": "S31",
    "dimensionKey": "technology",
    "dimensionTitleFa": "فناوری و مهندسی",
    "dimensionTitleEn": "Technology & Engineering",
    "weight": 10,
    "question": "AI تا چه حد از طریق API، integration یا workflow با سیستم‌های موجود سازمان متصل شده است؟"
  },
  {
    "code": "S32",
    "dimensionKey": "technology",
    "dimensionTitleFa": "فناوری و مهندسی",
    "dimensionTitleEn": "Technology & Engineering",
    "weight": 10,
    "question": "برای توسعه، استقرار و reuse راهکارهای AI الگوها و استانداردهای قابل تکرار وجود دارد؟"
  },
  {
    "code": "S33",
    "dimensionKey": "technology",
    "dimensionTitleFa": "فناوری و مهندسی",
    "dimensionTitleEn": "Technology & Engineering",
    "weight": 10,
    "question": "عملکرد، کیفیت، امنیت و هزینه راهکارهای AI پس از استقرار تا چه حد پایش می‌شود؟"
  },
  {
    "code": "S34",
    "dimensionKey": "technology",
    "dimensionTitleFa": "فناوری و مهندسی",
    "dimensionTitleEn": "Technology & Engineering",
    "weight": 10,
    "question": "زیرساخت و معماری AI تا چه حد امکان افزایش تعداد use caseها و کاربران را بدون افزایش نامتناسب پیچیدگی فراهم می‌کند؟"
  },
  {
    "code": "S35",
    "dimensionKey": "operating_model",
    "dimensionTitleFa": "سازمان و مدل عملیاتی",
    "dimensionTitleEn": "Organization & Operating Model",
    "weight": 10,
    "question": "فرآیند مشخصی برای ثبت، ارزیابی، انتخاب و پیگیری درخواست‌ها و ابتکارهای AI وجود دارد؟"
  },
  {
    "code": "S36",
    "dimensionKey": "operating_model",
    "dimensionTitleFa": "سازمان و مدل عملیاتی",
    "dimensionTitleEn": "Organization & Operating Model",
    "weight": 10,
    "question": "نقش‌ها، decision rights و مسیر تصمیم‌گیری و escalation برای AI تا چه حد روشن است؟"
  },
  {
    "code": "S37",
    "dimensionKey": "operating_model",
    "dimensionTitleFa": "سازمان و مدل عملیاتی",
    "dimensionTitleEn": "Organization & Operating Model",
    "weight": 10,
    "question": "بین business و IT/data برای اجرای AI مدل همکاری و مسئولیت مشترک مشخص وجود دارد؟"
  },
  {
    "code": "S38",
    "dimensionKey": "operating_model",
    "dimensionTitleFa": "سازمان و مدل عملیاتی",
    "dimensionTitleEn": "Organization & Operating Model",
    "weight": 10,
    "question": "سازمان از یک سازوکار enablement مانند CoE، AI champions یا شبکه تخصصی برای انتشار قابلیت استفاده می‌کند؟"
  },
  {
    "code": "S39",
    "dimensionKey": "operating_model",
    "dimensionTitleFa": "سازمان و مدل عملیاتی",
    "dimensionTitleEn": "Organization & Operating Model",
    "weight": 10,
    "question": "AI به‌عنوان یک قابلیت مستمر با چرخه بازبینی، بهبود و مدیریت lifecycle اداره می‌شود، نه صرفاً مجموعه‌ای از پروژه‌های جداگانه؟"
  },
  {
    "code": "S40",
    "dimensionKey": "operating_model",
    "dimensionTitleFa": "سازمان و مدل عملیاتی",
    "dimensionTitleEn": "Organization & Operating Model",
    "weight": 10,
    "question": "نتایج و تجربه‌های use caseهای AI در سطح سازمان به‌صورت نظام‌مند مستندسازی و برای تصمیم‌های بعدی reuse می‌شوند؟"
  }
];
const RUBRICS = {
  "1": {
    "title": "سطح ۱: فاقد قابلیت",
    "desc": "این قابلیت در سازمان وجود ندارد یا فقط متکی به اقدامات فردی و موردی است."
  },
  "2": {
    "title": "سطح ۲: در حال شکل‌گیری",
    "desc": "اقدامات اولیه یا پایلوت‌های پراکنده وجود دارد، اما هنوز رسمی یا پایدار نشده است."
  },
  "3": {
    "title": "سطح ۳: تعریف‌شده و عملیاتی",
    "desc": "دارای رویه مشخص، مسئول مشخص و استفاده واقعی در بخشی از سازمان است."
  },
  "4": {
    "title": "سطح ۴: مقیاس‌یافته و استاندارد",
    "desc": "در چند واحد سازمانی با استاندارد یکپارچه و سنجه‌های مشخص اجرا می‌شود."
  },
  "5": {
    "title": "سطح ۵: بهینه و تحول‌آفرین",
    "desc": "به‌صورت مستمر ارتقا می‌یابد و نقش تعیین‌کننده در مزیت رقابتی سازمان دارد."
  }
};

const STORAGE_KEY = 'houshran_single_assessment_v2';

let state = {
    orgInfo: {
        orgName: '',
        userName: '',
        role: '',
        industry: ''
    },
    currentQuestionIndex: 0,
    answers: {},       // code -> 1..5 or 'NA'
    naReasons: {},     // code -> string
    isStarted: false,
    isCompleted: false
};

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state = { ...state, ...parsed };
        } catch (e) {
            console.error('Error parsing stored assessment state', e);
        }
    }
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

document.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderApp();
});

function renderApp() {
    const container = document.getElementById('assessment-app');
    if (!container) return;

    if (!state.isStarted) {
        renderIntro(container);
    } else if (state.isCompleted) {
        renderReport(container);
    } else {
        renderSingleQuestion(container);
    }
}

// ۱. صفحه شروع ارزیابی (بسیار مختصر و تمیز)
function renderIntro(container) {
    container.innerHTML = `
        <div class="diag-card intro-card" data-aos="fade-up">
            <div class="diag-header-badge">
                <span class="diag-badge-dot"></span>
                سنجش آمادگی سازمانی برای هوش مصنوعی
            </div>
            
            <h1 class="diag-title">ارزیابی سازمانی هوشران</h1>
            <p class="diag-subtitle">
                این ارزیابی شامل <strong>۴۰ پرسش هدفمند</strong> در ۷ بُعد کلیدی است که به صورت <strong>تک‌به‌تک</strong> نمایش داده می‌شود تا با تمرکز کامل پاسخ دهید. در پایان، کارنامه و نقشه راه ۹۰ روزه تحول تیم خود را دریافت خواهید کرد.
            </p>

            <form id="intro-form" class="diag-form" novalidate>
                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label" for="orgName">نام سازمان یا شرکت *</label>
                        <input class="form-control" type="text" id="orgName" placeholder="مثال: شرکت پیشگامان فناور" value="${state.orgInfo.orgName || ''}" required autocomplete="off">
                        <div class="field-error-msg" id="err-orgName"></div>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="userName">نام و نام خانوادگی *</label>
                        <input class="form-control" type="text" id="userName" placeholder="مثال: علی احمدی" value="${state.orgInfo.userName || ''}" required autocomplete="off">
                        <div class="field-error-msg" id="err-userName"></div>
                    </div>
                </div>

                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label" for="role">سمت یا نقش سازمانی *</label>
                        <input class="form-control" type="text" id="role" placeholder="مثال: مدیر تحول دیجیتال / مدیر عامل" value="${state.orgInfo.role || ''}" required autocomplete="off">
                        <div class="field-error-msg" id="err-role"></div>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="industry">صنعت / حوزه فعالیت</label>
                        <input class="form-control" type="text" id="industry" placeholder="مثال: خدمات مالی، تجارت، تولید، سلامت..." value="${state.orgInfo.industry || ''}">
                        <div class="field-error-msg" id="err-industry"></div>
                    </div>
                </div>

                <div class="intro-actions">
                    <button type="submit" class="btn btn--primary btn--lg">
                        آغاز ارزیابی (سوال اول)
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    </button>

                    ${Object.keys(state.answers).length > 0 ? `
                        <button type="button" class="btn btn--outline" id="reset-state-btn">
                            شروع مجدد از صفر
                        </button>
                    ` : ''}
                </div>
            </form>
        </div>
    `;

    const form = document.getElementById('intro-form');
    const orgInput = document.getElementById('orgName');
    const userInput = document.getElementById('userName');
    const roleInput = document.getElementById('role');
    const indInput = document.getElementById('industry');

    // تابع اعتبارسنجی اعداد (فارسی، عربی، انگلیسی)
    const hasDigits = (str) => /[0-9\u06F0-\u06F9\u0660-\u0669]/.test(str);
    const hasLetters = (str) => /[\u0600-\u06FFa-zA-Z]/.test(str);

    function validateField(input, errId, fieldLabel, disallowNumbers = true) {
        const val = input.value.trim();
        const errEl = document.getElementById(errId);
        let error = '';

        const onlyDigits = /^[0-9\u06F0-\u06F9\u0660-\u0669\s\-_.]+$/.test(val);
        const letterCount = (val.match(/[\u0600-\u06FFa-zA-Z]/g) || []).length;

        if (!val) {
            error = `${fieldLabel} الزامی است.`;
        } else if (val.length < 2) {
            error = `${fieldLabel} باید حداقل ۲ کاراکتر باشد.`;
        } else if (onlyDigits) {
            error = `${fieldLabel} نمی‌تواند صرفاً از اعداد تشکیل شده باشد؛ باید حداقل ۲ حرف الفبا داشته باشد.`;
        } else if (letterCount < 2) {
            error = `${fieldLabel} باید حداقل شامل ۲ حرف الفبا باشد (اعداد در کنار حروف مجاز است).`;
        }

        if (error) {
            input.classList.add('input-has-error');
            if (errEl) {
                errEl.innerText = error;
                errEl.style.display = 'block';
            }
            return false;
        } else {
            input.classList.remove('input-has-error');
            if (errEl) {
                errEl.innerText = '';
                errEl.style.display = 'none';
            }
            return true;
        }
    }

    // بررسی زنده هنگام تایپ کاربر
    orgInput.addEventListener('input', () => validateField(orgInput, 'err-orgName', 'نام سازمان یا شرکت', true));
    userInput.addEventListener('input', () => validateField(userInput, 'err-userName', 'نام و نام خانوادگی', true));
    roleInput.addEventListener('input', () => validateField(roleInput, 'err-role', 'سمت سازمانی', true));
    if (indInput) {
        indInput.addEventListener('input', () => {
            if (indInput.value.trim() && hasDigits(indInput.value)) {
                validateField(indInput, 'err-industry', 'حوزه فعالیت', true);
            } else {
                indInput.classList.remove('input-has-error');
                const err = document.getElementById('err-industry');
                if (err) err.style.display = 'none';
            }
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isOrgValid = validateField(orgInput, 'err-orgName', 'نام سازمان یا شرکت', true);
        const isUserValid = validateField(userInput, 'err-userName', 'نام و نام خانوادگی', true);
        const isRoleValid = validateField(roleInput, 'err-role', 'سمت سازمانی', true);

        if (!isOrgValid || !isUserValid || !isRoleValid) {
            // فوکوس روی اولین فیلد نامعتبر
            if (!isOrgValid) orgInput.focus();
            else if (!isUserValid) userInput.focus();
            else if (!isRoleValid) roleInput.focus();
            return;
        }

        state.orgInfo.orgName = orgInput.value.trim();
        state.orgInfo.userName = userInput.value.trim();
        state.orgInfo.role = roleInput.value.trim();
        state.orgInfo.industry = indInput ? indInput.value.trim() : '';
        state.isStarted = true;
        saveState();
        renderApp();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const resetBtn = document.getElementById('reset-state-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('آیا می‌خواهید تمام پاسخ‌های ذخیره‌شده پاک شود و از سوال ۱ شروع کنید؟')) {
                localStorage.removeItem(STORAGE_KEY);
                state.answers = {};
                state.naReasons = {};
                state.currentQuestionIndex = 0;
                state.isStarted = false;
                state.isCompleted = false;
                renderApp();
            }
        });
    }
}

// ۲. نمایش تک‌سوالی متمرکز (Single Question View)
function renderSingleQuestion(container) {
    const qIndex = state.currentQuestionIndex;
    const q = QUESTIONS[qIndex];
    const dim = DIMENSIONS.find(d => d.key === q.dimensionKey) || DIMENSIONS[0];

    const currentAnswer = state.answers[q.code];
    const currentNaReason = state.naReasons[q.code] || '';
    const isNaSelected = currentAnswer === 'NA';

    const totalQuestions = QUESTIONS.length;
    const progressPercent = Math.round(((qIndex + 1) / totalQuestions) * 100);

    // اعتبارسنجی دلیل عدم تناسب: باید حتماً دارای حروف الفبا باشد (صرفاً عدد یا خالی قبول نیست، ولی ترکیب حرف و عدد مجاز است)
    const isReasonValid = (str) => {
        const trimmed = (str || '').trim();
        // باید حداقل ۳ حرف الفبا داشته باشد
        const letters = trimmed.match(/[\u0600-\u06FFa-zA-Z]/g);
        return Boolean(letters && letters.length >= 3);
    };

    let canProceed = false;
    if (currentAnswer >= 1 && currentAnswer <= 5) {
        canProceed = true;
    } else if (isNaSelected && isReasonValid(currentNaReason)) {
        canProceed = true;
    }

    container.innerHTML = `
        <div class="single-q-wrapper" data-aos="fade-up">
            <!-- نوار پیشرفت و موقعیت فعلی -->
            <div class="single-q-topbar">
                <div class="single-q-dim-tag">
                    <span class="single-q-dim-badge">${dim.titleFa}</span>
                    <span class="single-q-counter">پرسش ${qIndex + 1} از ${totalQuestions}</span>
                </div>

                <div class="single-q-topbar-actions">
                    <div class="single-q-progress">
                        <span class="single-q-percent">${progressPercent}٪</span>
                        <div class="single-q-bar-track">
                            <div class="single-q-bar-fill" style="width: ${progressPercent}%;"></div>
                        </div>
                    </div>
                    <button type="button" class="btn-restart-action" onclick="resetEntireAssessment()" title="پاک کردن تمام پاسخ‌ها و شروع از صفر">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                        شروع مجدد
                    </button>
                </div>
            </div>

            <!-- کارت سوال فعال -->
            <div class="single-q-card">
                <div class="single-q-head">
                    <span class="single-q-code">${q.code}</span>
                    <h2 class="single-q-title">${q.question}</h2>
                </div>

                <!-- گزینه‌های سطح ۱ تا ۵ به صورت پشته‌ای منظم و خوانا -->
                <div class="single-q-options">
                    ${[1, 2, 3, 4, 5].map(lvl => {
                        const rub = RUBRICS[lvl];
                        const isChecked = currentAnswer === lvl;

                        return `
                            <label class="q-option-item ${isChecked ? 'is-selected' : ''}" data-lvl="${lvl}" onclick="selectLevel('${q.code}', ${lvl})">
                                <div class="q-radio-indicator">
                                    <span class="q-radio-circle"></span>
                                </div>
                                <div class="q-option-body">
                                    <div class="q-option-title-row">
                                        <span class="q-level-tag">سطح ${lvl}</span>
                                        <span class="q-level-name">${rub.title.replace(/سطح \d+: /, '')}</span>
                                    </div>
                                    <p class="q-level-desc">${rub.desc}</p>
                                </div>
                            </label>
                        `;
                    }).join('')}

                    <!-- گزینه N/A (عدم ارتباط با سازمان با الزام ثبت دلیل) -->
                    <div class="q-na-container ${isNaSelected ? 'is-na-active' : ''}">
                        <label class="q-option-item q-option-item--na ${isNaSelected ? 'is-selected' : ''}" onclick="toggleNa('${q.code}')">
                            <div class="q-radio-indicator">
                                <span class="q-radio-circle"></span>
                            </div>
                            <div class="q-option-body">
                                <span class="q-level-name" style="color: #B45309;">در سازمان ما این سوال مناسبت ندارد (غیرقابل اعمال / N/A)</span>
                                <p class="q-level-desc">در صورتی که این فرآیند یا سیستم ماهیتاً در ساختار سازمان شما قابل اعمال نیست، این گزینه را انتخاب و دلیل را ذکر کنید.</p>
                            </div>
                        </label>

                        <div class="na-reason-input-wrap" id="na-reason-box" style="display: ${isNaSelected ? 'block' : 'none'};">
                            <label class="form-label" for="na-reason-field" style="font-size: 0.88rem; color: #92400E; font-weight: 700;">
                                علت عدم تناسب با سازمان شما را بنویسید (الزامی جهت رفتن به سوال بعد) : *
                            </label>
                            <input 
                                type="text" 
                                class="form-control ${isNaSelected && currentNaReason && !isReasonValid(currentNaReason) ? 'input-has-error' : ''}" 
                                id="na-reason-field" 
                                placeholder="توضیح کوتاه متنی (مثال: شرکت ما برونسپاری کامل انجام می‌دهد یا در فاز ۲ اجرا می‌شود)"
                                value="${currentNaReason}"
                                oninput="handleNaReasonInput('${q.code}', this.value)"
                                autocomplete="off"
                            >
                            <div class="field-error-msg" id="na-reason-err" style="display: ${isNaSelected && currentNaReason && !isReasonValid(currentNaReason) ? 'block' : 'none'};">
                                علت عدم تناسب باید با حروف الفبا توضیح داده شود (وارد کردن اعداد خالی قابل قبول نیست).
                            </div>
                        </div>
                    </div>
                </div>

                <!-- هشدار در صورتی که پاسخی انتخاب نشده باشد -->
                <div class="q-validation-alert" id="q-validation-msg" style="display: none;">
                    لطفاً پیش از رفتن به مرحله بعد، یکی از گزینه‌ها را انتخاب کنید (یا در صورت عدم تناسب، دلیل آن را یادداشت فرمایید).
                </div>

                <!-- دکمه‌های گام قبلی و بعدی -->
                <div class="single-q-actions">
                    ${qIndex > 0 ? `
                        <button type="button" class="btn btn--outline" id="btn-prev-q">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            سوال قبلی
                        </button>
                    ` : '<div></div>'}

                    <button 
                        type="button" 
                        class="btn btn--primary btn--next-step" 
                        id="btn-next-q"
                        ${!canProceed ? 'disabled' : ''}
                    >
                        ${qIndex === totalQuestions - 1 ? 'مشاهده گزارش و تحلیل نهایی' : 'سوال بعدی'}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    </button>
                </div>
            </div>
        </div>
    `;

    // دکمه قبلی
    const prevBtn = document.getElementById('btn-prev-q');
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (state.currentQuestionIndex > 0) {
                state.currentQuestionIndex--;
                saveState();
                renderApp();
                window.scrollTo({ top: 120, behavior: 'smooth' });
            }
        });
    }

    // دکمه بعدی
    const nextBtn = document.getElementById('btn-next-q');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const currentAns = state.answers[q.code];
            const reason = (state.naReasons[q.code] || '').trim();

            if (!currentAns) {
                const alertEl = document.getElementById('q-validation-msg');
                if (alertEl) {
                    alertEl.innerText = 'لطفاً پیش از رفتن به مرحله بعد، یکی از سطوح ۱ تا ۵ یا گزینه عدم تناسب را انتخاب کنید.';
                    alertEl.style.display = 'block';
                }
                return;
            }

            if (currentAns === 'NA' && !checkReasonValid(reason)) {
                const alertEl = document.getElementById('q-validation-msg');
                if (alertEl) {
                    alertEl.innerText = 'علت عدم تناسب با سازمان باید حتماً دارای حروف الفبا باشد (اعداد خالی قابل قبول نیست).';
                    alertEl.style.display = 'block';
                }
                const inputEl = document.getElementById('na-reason-field');
                if (inputEl) inputEl.focus();
                return;
            }

            if (state.currentQuestionIndex < QUESTIONS.length - 1) {
                state.currentQuestionIndex++;
                saveState();
                renderApp();
                window.scrollTo({ top: 120, behavior: 'smooth' });
            } else {
                // پایان آزمون
                state.isCompleted = true;
                saveState();
                renderApp();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
}

// انتخاب سطح ۱ تا ۵
window.selectLevel = function(code, lvl) {
    state.answers[code] = lvl;
    delete state.naReasons[code];
    saveState();

    // ۱. به‌روزرسانی سریع کلاس‌های انتخابی در DOM بدون تخریب عناصر
    const allOptions = document.querySelectorAll('.q-option-item');
    allOptions.forEach(el => el.classList.remove('is-selected'));

    const selectedOpt = document.querySelector(`.q-option-item[data-lvl="${lvl}"]`);
    if (selectedOpt) {
        selectedOpt.classList.add('is-selected');
    }

    // ۲. پنهان‌سازی بخش N/A در صورت باز بودن
    const naBox = document.getElementById('na-reason-box');
    if (naBox) naBox.style.display = 'none';
    const naContainer = document.querySelector('.q-na-container');
    if (naContainer) naContainer.classList.remove('is-na-active');

    // ۳. فعال‌سازی دکمه سوال بعدی و حذف اخطار اعتبارسنجی
    const nextBtn = document.getElementById('btn-next-q');
    const alertEl = document.getElementById('q-validation-msg');
    if (alertEl) alertEl.style.display = 'none';

    if (nextBtn) {
        nextBtn.removeAttribute('disabled');
        nextBtn.classList.add('btn--ready-active');

        // ۴. اسکرول مطمئن و نرم به سمت دکمه سوال بعدی (سازگار با تمام مرورگرهای موبایل و وب‌ویو)
        setTimeout(() => {
            // روش اول: scrollIntoView
            try {
                nextBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } catch (e) {}

            // روش دوم: محاسبه مطلق پیکسلی برای مرورگرهایی مثل iOS Safari و Chrome Mobile
            try {
                const rect = nextBtn.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                const targetY = rect.top + scrollTop - (window.innerHeight / 2) + 40;
                window.scrollTo({
                    top: Math.max(0, targetY),
                    behavior: 'smooth'
                });
            } catch (e) {}

            try {
                nextBtn.focus();
            } catch (e) {}
        }, 40);
    }
};

// انتخاب N/A
window.toggleNa = function(code) {
    state.answers[code] = 'NA';
    saveState();
    const container = document.getElementById('assessment-app');
    renderSingleQuestion(container);
    setTimeout(() => {
        const input = document.getElementById('na-reason-field');
        if (input) input.focus();
    }, 100);
};

// تابع بررسی معتبر بودن متن (نباید فقط عدد باشد، باید حداقل ۳ حرف داشته باشد)
function checkReasonValid(str) {
    const trimmed = (str || '').trim();
    const letters = trimmed.match(/[\u0600-\u06FFa-zA-Z]/g);
    return Boolean(letters && letters.length >= 3);
}

// ثبت دلیل N/A و اعتبارسنجی بلادرنگ
window.handleNaReasonInput = function(code, reason) {
    state.naReasons[code] = reason;
    saveState();

    const nextBtn = document.getElementById('btn-next-q');
    const alertEl = document.getElementById('q-validation-msg');
    const errEl = document.getElementById('na-reason-err');
    const inputEl = document.getElementById('na-reason-field');

    const isValid = checkReasonValid(reason);

    if (isValid) {
        if (nextBtn) nextBtn.removeAttribute('disabled');
        if (alertEl) alertEl.style.display = 'none';
        if (errEl) errEl.style.display = 'none';
        if (inputEl) inputEl.classList.remove('input-has-error');
    } else {
        if (nextBtn) nextBtn.setAttribute('disabled', 'true');
        if (inputEl) inputEl.classList.add('input-has-error');
        if (errEl) {
            errEl.innerText = 'علت عدم تناسب باید با حروف الفبا توضیح داده شود (وارد کردن اعداد خالی قابل قبول نیست).';
            errEl.style.display = 'block';
        }
    }
};

// تابع سراسری شروع مجدد ارزیابی
window.resetEntireAssessment = function() {
    if (confirm('آیا مطمئن هستید که می‌خواهید تمام پاسخ‌ها و اطلاعات پاک شده و از ابتدا شروع کنید؟')) {
        localStorage.removeItem(STORAGE_KEY);
        state = {
            orgInfo: {
                orgName: '',
                userName: '',
                role: '',
                industry: ''
            },
            currentQuestionIndex: 0,
            answers: {},
            naReasons: {},
            isStarted: false,
            isCompleted: false
        };
        saveState();
        renderApp();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

// ۳. محاسبه نمرات با حذف N/A از مخرج و استخراج دقیق
function calculateScores() {
    const dimResults = [];
    let totalWeightedScore = 0;
    let totalWeight = 0;

    DIMENSIONS.forEach(dim => {
        const dimQs = QUESTIONS.filter(q => q.dimensionKey === dim.key);
        let sum = 0;
        let validCount = 0;
        let naCount = 0;

        dimQs.forEach(q => {
            const val = state.answers[q.code];
            if (val === 'NA') {
                naCount++;
            } else if (typeof val === 'number') {
                sum += val;
                validCount++;
            } else {
                // پیش‌فرض اگر خالی مانده باشد
                sum += 1;
                validCount++;
            }
        });

        // اگر همه NA بوده‌اند، میانگین متوسط در نظر گرفته می‌شود
        const avg = validCount > 0 ? (sum / validCount) : 2.5;
        const percent = Math.round(((avg - 1) / 4) * 100);

        totalWeightedScore += (avg * dim.weight);
        totalWeight += dim.weight;

        dimResults.push({
            ...dim,
            avg: Number(avg.toFixed(2)),
            percent: Math.max(0, Math.min(100, percent)),
            validCount,
            naCount
        });
    });

    const overallAvg = totalWeight > 0 ? Number((totalWeightedScore / totalWeight).toFixed(2)) : 1;
    const overallPercent = Math.max(0, Math.min(100, Math.round(((overallAvg - 1) / 4) * 100)));

    let stage = {
        title: 'مرحله ۱: آگاهی و مقدماتی',
        badge: 'مبتدی',
        desc: 'استفاده از هوش مصنوعی پراکنده و متکی به علایق فردی است؛ رویه رسمی سازمانی وجود ندارد.',
        color: '#71717A'
    };
    if (overallAvg >= 4.2) {
        stage = {
            title: 'مرحله ۵: پیشرو و تحول‌آفرین',
            badge: 'سطح پیشرفته جهانی',
            desc: 'سازمان از هوش مصنوعی برای خلق مزیت رقابتی پایدار، نوآوری در مدل کسب‌وکار و بهینه‌سازی خودکار بهره می‌برد.',
            color: '#10B981'
        };
    } else if (overallAvg >= 3.4) {
        stage = {
            title: 'مرحله ۴: مقیاس‌یافته و نظام‌مند',
            badge: 'مقیاس‌یافته',
            desc: 'استانداردها، حاکمیت و رویه‌های مشترک در بخش‌های مختلف سازمان تثبیت شده و ارزش آن به وضوح سنجیده می‌شود.',
            color: '#0284C7'
        };
    } else if (overallAvg >= 2.6) {
        stage = {
            title: 'مرحله ۳: تعریف‌شده و عملیاتی',
            badge: 'عملیاتی',
            desc: 'سازمان دارای Use Caseهای مشخص و موفق در سطح پایلوت است و مالکیت فرایندها تعریف شده است.',
            color: '#D97706'
        };
    } else if (overallAvg >= 1.8) {
        stage = {
            title: 'مرحله ۲: آزمایش و شکل‌گیری',
            badge: 'در حال شکل‌گیری',
            desc: 'تیم‌ها در حال آزمایش ابزارهای AI هستند، اما نیازمند استراتژی یکپارچه و آموزش هدفمند می‌باشند.',
            color: '#EAB308'
        };
    }

    const sorted = [...dimResults].sort((a, b) => b.avg - a.avg);
    const strengths = sorted.slice(0, 2);
    const gaps = sorted.slice(-2).reverse();

    return {
        overallAvg,
        overallPercent,
        stage,
        dimResults,
        strengths,
        gaps
    };
}

// ۴. نمایش گزارش تحلیلی
function renderReport(container) {
    const results = calculateScores();

    container.innerHTML = `
        <div class="report-wrapper" data-aos="fade-up">
            <div class="report-header">
                <div class="report-header-top">
                    <span class="report-tag">گزارش رسمی سنجش آمادگی هوش مصنوعی</span>
                    <h1 class="report-title">کارنامه بلوغ هوش مصنوعی: ${state.orgInfo.orgName || 'سازمان شما'}</h1>
                    <p class="report-meta">
                        ارزیابی‌شده توسط: <strong>${state.orgInfo.userName || 'کاربر گرامی'}</strong> | 
                        سمت: <strong>${state.orgInfo.role || 'مدیریت'}</strong> | 
                        تاریخ سنجش: <strong>${new Date().toLocaleDateString('fa-IR')}</strong>
                    </p>
                </div>
                <div class="report-header-actions no-print">
                    <button class="btn btn--primary btn--sm btn-official-pdf" onclick="exportHoushranOfficialPdf()" title="دریافت کتابچه ۵ اسلایدی مطابق استاندارد هوشران">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                        دریافت کتابچه رسمی PDF (استاندارد هوشران)
                    </button>
                    <button class="btn btn--outline btn--sm" onclick="openHoushranSlideDocViewer()" title="مشاهده پیش‌نمایش تمام‌صفحه ۵ اسلاید A4">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        پیش‌نمایش کتابچه (SlideDoc)
                    </button>
                    <button class="btn btn--outline btn--sm" id="btn-edit-answers">
                        بازنگری سوالات
                    </button>
                    <button class="btn btn--outline btn--sm btn-restart-report" onclick="resetEntireAssessment()" title="پاک کردن تمام پاسخ‌ها و شروع مجدد از صفر">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                        شروع مجدد ارزیابی
                    </button>
                </div>
            </div>

            <!-- کارت شاخص و نمره کل -->
            <div class="report-hero-card">
                <div class="report-score-box">
                    <div class="report-score-num">${results.overallAvg} <span style="font-size: 1.2rem; color: #A1A1AA;">/ ۵</span></div>
                    <div class="report-score-label">شاخص آمادگی هوش مصنوعی (AI Readiness Index)</div>
                    <div class="report-score-percent">تحقق ${results.overallPercent}٪ از ظرفیت مطلوب سازمانی</div>
                </div>

                <div class="report-stage-box">
                    <div class="report-stage-badge" style="background: rgba(234, 179, 8, 0.18); color: #D97706; border: 1px solid rgba(234, 179, 8, 0.35);">
                        ${results.stage.badge}
                    </div>
                    <h2 class="report-stage-title">${results.stage.title}</h2>
                    <p class="report-stage-desc">${results.stage.desc}</p>
                </div>
            </div>

            <!-- تفکیک ابعاد ۷‌گانه -->
            <div class="report-dims-section">
                <h3 class="report-section-title">وضعیت تفکیکی ابعاد ۷‌گانه سازمانی</h3>
                
                <div class="report-dims-grid">
                    ${results.dimResults.map(dim => `
                        <div class="dim-result-card">
                            <div class="dim-result-head">
                                <span class="dim-result-title">${dim.titleFa}</span>
                                <span class="dim-result-score">${dim.avg} از ۵ (${dim.percent}٪)</span>
                            </div>
                            <div class="dim-progress-track">
                                <div class="dim-progress-bar" style="width: ${dim.percent}%;"></div>
                            </div>
                            <p class="dim-result-desc">${dim.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- نقاط قوت و گلوگاه‌های اولویت‌دار -->
            <div class="report-analysis-grid">
                <div class="analysis-box analysis-box--strengths">
                    <div class="analysis-box-title">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        نقاط قوت کلیدی سازمان
                    </div>
                    <ul class="analysis-list">
                        ${results.strengths.map(s => `
                            <li>
                                <strong>${s.titleFa} (امتیاز ${s.avg} از ۵):</strong>
                                نشان‌دهنده بستر مناسب در این بخش برای توسعه سایر ابتکارات هوش مصنوعی.
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <div class="analysis-box analysis-box--gaps">
                    <div class="analysis-box-title" style="color: #D97706;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                        شکاف‌های اولویت‌دار نیازمند بهبود
                    </div>
                    <ul class="analysis-list">
                        ${results.gaps.map(g => `
                            <li>
                                <strong>${g.titleFa} (امتیاز ${g.avg} از ۵):</strong>
                                نیازمند اقدام هدفمند برای جلوگیری از ریسک هدررفت منابع یا عدم همراهی کارکنان.
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>

            <!-- نقشه راه ۹۰ روزه -->
            <div class="roadmap-section">
                <div class="roadmap-header">
                    <span class="report-tag">برنامه اجرایی پیشنهادی</span>
                    <h3 class="report-section-title">نقشه راه تحول ۹۰ روزه هوشران</h3>
                    <p class="roadmap-subtitle">گام‌های زمان‌بندی‌شده برای ارتقای ظرفیت سازمانی تیم شما:</p>
                </div>

                <div class="roadmap-grid">
                    <div class="roadmap-card">
                        <div class="roadmap-card-phase">فاز اول (روز ۱ تا ۳۰)</div>
                        <h4 class="roadmap-card-title">هم‌راستاسازی و سواد پایه</h4>
                        <ul class="roadmap-card-list">
                            <li>تدوین چارچوب و خط‌مشی استفاده مسئولانه از AI در سازمان.</li>
                            <li>برگزاری دوره <strong>انسان هوشران</strong> برای مدیران و کارشناسان کلیدی.</li>
                            <li>انتخاب ۳ کاربرد با بازده سریع (Quick Wins).</li>
                        </ul>
                    </div>

                    <div class="roadmap-card">
                        <div class="roadmap-card-phase">فاز دوم (روز ۳۱ تا ۶۰)</div>
                        <h4 class="roadmap-card-title">پایلوت‌ها و بازطراحی فرایندها</h4>
                        <ul class="roadmap-card-list">
                            <li>پیاده‌سازی مسیر <strong>فروش با هوش مصنوعی</strong> در دپارتمان فروش و بازاریابی.</li>
                            <li>ساخت دستیارهای اختصاصی کاری با پرامپت‌های پایدار.</li>
                            <li>سنجش صرفه‌جویی زمان و کیفیت خروجی‌ها.</li>
                        </ul>
                    </div>

                    <div class="roadmap-card">
                        <div class="roadmap-card-phase">فاز سوم (روز ۶۱ تا ۹۰)</div>
                        <h4 class="roadmap-card-title">تثبیت، استانداردسازی و توسعه</h4>
                        <ul class="roadmap-card-list">
                            <li>ایجاد ساختار نظارت انسانی و یکپارچگی جریان داده‌ها.</li>
                            <li>شبکه‌سازی مروجان هوش مصنوعی در سایر دپارتمان‌ها.</li>
                            <li>ارزیابی مجدد شاخص‌های بلوغ و توسعه کاربردها.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- بنر مشاوره تکمیلی -->
            <div class="consultation-banner no-print">
                <div class="consultation-content">
                    <h3>جلسه بررسی نتایج ارزیابی با کارشناسان هوشران</h3>
                    <p>برای دریافت گزارش تحلیلی عمیق‌تر و طراحی برنامه اجرایی مختص سازمان خود، فرم تماس را تکمیل بفرمایید.</p>
                </div>
                <a href="index.html#contact" class="btn btn--primary">
                    درخواست جلسه مشاوره
                </a>
            </div>
        </div>
    `;

    const editBtn = document.getElementById('btn-edit-answers');
    if (editBtn) {
        editBtn.addEventListener('click', () => {
            state.isCompleted = false;
            state.currentQuestionIndex = 0;
            saveState();
            renderApp();
            window.scrollTo({ top: 120, behavior: 'smooth' });
        });
    }
}


// =========================================================
// موتور رسمی تولید کتابچه اسلایدداک PDF هوشران (Houshran SlideDoc Engine)
// منطبق ۱۰۰٪ بر استاندارد نظام جامع نشر هوشران (houshran-pdf-publisher)
// =========================================================

const HOUSHRAN_VECTOR_LOGO = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"443.000000pt\" height=\"175.000000pt\" viewBox=\"0 0 443.000000 175.000000\" xmlns:c2pa=\"http://c2pa.org/manifest\"> <g transform=\"translate(0.000000,175.000000) scale(0.100000,-0.100000)\"> <g fill=\"#1d254e\" stroke=\"none\"> <path d=\"M1163 1419 l-71 -40 9 -32 c6 -18 16 -211 24 -430 7 -220 16 -401 19 -404 6 -7 114 25 120 36 3 5 9 154 12 332 5 274 4 342 -10 444 -10 66 -20 123 -24 127 -4 4 -39 -11 -79 -33z M3591 1159 c-31 -67 -38 -99 -23 -99 4 0 13 -4 20 -9 11 -6 8 -15 -13 -37 -68 -73 -91 -187 -52 -263 9 -19 17 -36 17 -38 0 -1 -40 -3 -90 -3 l-90 0 -5 28 c-32 148 -71 233 -127 275 -100 75 -240 56 -315 -41 -89 -116 -106 -289 -37 -372 45 -53 77 -63 209 -70 l120 -5 -40 -43 c-57 -64 -165 -113 -280 -127 -52 -7 -57 -10 -76 -47 -11 -22 -19 -41 -17 -43 13 -11 161 -47 212 -52 50 -4 71 -2 109 15 88 39 182 147 221 252 l17 46 128 11 c88 7 143 18 175 31 45 21 46 21 113 1 112 -32 275 -52 320 -40 78 21 128 111 128 231 0 167 -92 249 -457 408 l-136 59 -31 -68z m194 -213 c32 -32 41 -85 21 -124 -18 -34 -52 -62 -77 -62 -25 0 -70 40 -85 77 -37 88 75 175 141 109z m-666 -70 c15 -8 35 -25 43 -38 20 -32 49 -119 42 -129 -7 -12 -121 -11 -166 1 -57 16 -75 69 -43 130 26 50 71 63 124 36z m888 -25 c62 -48 90 -102 74 -139 -12 -24 -13 -25 -97 -19 -47 2 -87 7 -89 9 -2 2 7 26 20 53 15 29 25 65 25 92 0 24 4 43 9 43 5 0 31 -18 58 -39z M2620 1083 c-25 -14 -55 -32 -67 -39 l-22 -14 21 -67 c52 -175 53 -222 4 -244 -34 -16 -93 -3 -122 26 -22 22 -24 33 -24 115 l0 90 -68 0 -69 0 -10 -86 c-12 -99 -32 -135 -84 -147 -45 -12 -84 4 -104 43 -19 37 -45 165 -45 220 0 21 -4 42 -10 45 -11 7 -502 -98 -567 -122 -30 -10 -43 -20 -43 -33 0 -10 14 -76 31 -146 37 -152 34 -174 -38 -254 -57 -63 -102 -93 -185 -121 -67 -22 -78 -31 -78 -65 0 -18 13 -26 80 -48 43 -14 97 -26 118 -26 92 0 225 141 262 279 14 51 14 193 1 238 -5 18 -6 35 -2 37 11 7 292 68 295 64 2 -2 9 -32 15 -68 26 -131 80 -199 178 -221 73 -17 147 0 200 46 l40 34 24 -25 c98 -105 291 -72 358 61 23 45 26 61 25 160 0 61 -5 126 -11 145 -7 19 -17 61 -23 93 -6 31 -17 57 -23 57 -7 -1 -32 -13 -57 -27z M873 977 c-79 -33 -81 -36 -63 -112 5 -22 19 -93 31 -157 24 -138 18 -174 -35 -207 -86 -54 -286 -69 -366 -28 -69 35 -85 64 -84 155 0 42 9 112 18 155 10 43 15 81 12 84 -3 3 -30 11 -61 18 -65 16 -63 18 -91 -95 -14 -54 -19 -111 -19 -205 0 -148 12 -184 81 -245 65 -56 116 -73 239 -78 234 -9 375 55 440 200 37 82 43 170 20 313 -16 107 -40 224 -47 230 -2 1 -36 -12 -75 -28z\"/> </g> <g fill=\"#079d64\" stroke=\"none\"> <path d=\"M2246 1488 c-25 -29 -46 -58 -46 -65 0 -13 102 -103 116 -103 11 0 104 108 104 120 0 11 -105 100 -118 100 -6 0 -31 -24 -56 -52z M2175 1326 c-6 -8 -28 -35 -50 -61 l-40 -48 60 -54 60 -55 51 58 52 58 57 -52 c31 -29 60 -52 65 -52 12 0 100 107 100 122 0 16 -96 98 -114 98 -6 0 -31 -22 -56 -50 l-45 -50 -55 49 c-59 54 -70 59 -85 37z M516 1088 l-46 -62 27 -28 c14 -15 44 -40 65 -54 l38 -27 25 23 c39 37 78 98 72 114 -8 19 -105 96 -122 96 -7 0 -34 -28 -59 -62z M1123 870 c0 -30 2 -43 4 -27 2 15 2 39 0 55 -2 15 -4 2 -4 -28z M1273 720 c0 -30 2 -43 4 -27 2 15 2 39 0 55 -2 15 -4 2 -4 -28z M3087 703 c18 -2 50 -2 70 0 21 2 7 4 -32 4 -38 0 -55 -2 -38 -4z M852 600 c0 -19 2 -27 5 -17 2 9 2 25 0 35 -3 9 -5 1 -5 -18z M203 575 c0 -22 2 -30 4 -17 2 12 2 30 0 40 -3 9 -5 -1 -4 -23z M3478 533 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z\"/> </g> </g> </svg>";

function buildHoushranSlideDocHtml(results) {
    const org = state.orgInfo.orgName || 'سازمان شما';
    const user = state.orgInfo.userName || 'کاربر گرامی';
    const role = state.orgInfo.role || 'مدیریت ارشد';
    const industry = state.orgInfo.industry || 'حوزه خدمات و کسب‌وکار';
    const dateFa = new Date().toLocaleDateString('fa-IR');

    const strengthsHtml = results.strengths.map(s => `
        <li>
            <strong>${s.titleFa} (امتیاز ${s.avg} از ۵ - تحقق ${s.percent}٪):</strong>
            نشان‌دهنده سرمایه راهبردی سازمان در این بعد است که می‌تواند به عنوان سکوی اتکا برای تسریع سایر ابعاد مورد استفاده قرار گیرد.
        </li>
    `).join('');

    const gapsHtml = results.gaps.map(g => `
        <li>
            <strong>${g.titleFa} (امتیاز ${g.avg} از ۵ - تحقق ${g.percent}٪):</strong>
            گلوگاه اصلی استقرار هوش مصنوعی در سازمان است و در صورت عدم مداخله هدفمند، ریسک اتلاف بودجه و مقاومت عملیاتی را به همراه دارد.
        </li>
    `).join('');

    const dimsCardsHtml = results.dimResults.map((dim, idx) => `
        <div class="dim-doc-card">
            <div class="dim-doc-head">
                <span class="dim-doc-title">${idx + 1}. ${dim.titleFa} (${dim.titleEn} - وزن ${dim.weight}٪)</span>
                <span class="dim-doc-meta">${dim.avg} از ۵ (${dim.percent}٪)</span>
            </div>
            <div class="dim-bar-track"><div class="dim-bar-fill" style="width: ${dim.percent}%;"></div></div>
            <p class="dim-doc-desc">${dim.description}</p>
        </div>
    `).join('');

    return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<title>کارنامه بلوغ هوش مصنوعی | ${org} - هوشران</title>
<style>
@page {
    size: A4 portrait;
    margin: 0;
}

@font-face {
    font-family: 'Vazirmatn';
    src: url('assets/fonts/Vazirmatn-Regular.ttf') format('truetype');
    font-weight: 400;
}
@font-face {
    font-family: 'Vazirmatn';
    src: url('assets/fonts/Vazirmatn-Medium.ttf') format('truetype');
    font-weight: 500;
}
@font-face {
    font-family: 'Vazirmatn';
    src: url('assets/fonts/Vazirmatn-Bold.ttf') format('truetype');
    font-weight: 700;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', Tahoma, sans-serif;
    background-color: #f1f5f9;
    color: #1e293b;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    direction: rtl;
    line-height: 1.6;
}

.slide-page {
    width: 210mm;
    height: 297mm;
    page-break-after: always;
    break-after: page;
    position: relative;
    overflow: hidden;
    background: #ffffff;
    margin: 0 auto 20px auto;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
}

@media print {
    body {
        background: #ffffff;
    }
    .slide-page {
        margin: 0;
        box-shadow: none;
        width: 210mm;
        height: 297mm;
        page-break-after: always;
        break-after: page;
    }
}

/* اسلاید ۱: جلد رسمی هوشران */
.cover-top {
    height: 64%;
    background-color: #1a2636;
    padding: 24mm 18mm 16mm 18mm;
    display: flex;
    flex-direction: column;
}

.cover-frame {
    border: 1px solid rgba(255, 255, 255, 0.75);
    border-radius: 4px;
    height: 100%;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}

.cover-kicker-top {
    color: #c5a059;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
}

.cover-title-group {
    margin: auto 0;
}

.cover-main-title {
    color: #ffffff;
    font-size: 26px;
    font-weight: 900;
    line-height: 1.5;
    margin-bottom: 12px;
}

.cover-subtitle {
    color: #cbd5e1;
    font-size: 15px;
    font-weight: 500;
}

.cover-kicker-bottom {
    color: #c5a059;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    font-family: sans-serif;
}

.cover-bottom {
    height: 36%;
    background-color: #faf8f5;
    border-top: 2.5px solid #a8823a;
    padding: 16mm 18mm;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cover-details {
    text-align: right;
}

.cover-details-tag {
    font-size: 11px;
    color: #64748b;
    font-weight: 700;
    margin-bottom: 6px;
}

.cover-org-name {
    font-size: 18px;
    font-weight: 900;
    color: #1a2636;
    margin-bottom: 10px;
}

.cover-meta-item {
    font-size: 12.5px;
    color: #334155;
    line-height: 1.9;
}

.cover-meta-item strong {
    color: #1e293b;
}

.cover-logo-wrap {
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.cover-logo-wrap svg {
    width: 100%;
    height: auto;
    max-height: 52px;
}

/* سربرگ و پانویس صفحات ۲ تا ۵ */
.doc-page-header {
    height: 20mm;
    padding: 6mm 18mm 0 18mm;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e2e8f0;
}

.header-tag {
    font-size: 10px;
    font-weight: 700;
    color: #64748b;
    letter-spacing: 1.5px;
    font-family: sans-serif;
}

.header-logo svg {
    width: 85px;
    height: auto;
}

.doc-page-body {
    flex: 1;
    padding: 10mm 18mm;
    display: flex;
    flex-direction: column;
}

.doc-page-footer {
    height: 14mm;
    padding: 0 18mm 6mm 18mm;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #f1f5f9;
    color: #94a3b8;
    font-size: 11px;
}

.section-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    padding-bottom: 10px;
    border-bottom: 1.5px solid #1a2636;
}

.section-badge {
    background-color: #a8823a;
    color: #ffffff;
    font-size: 11px;
    font-weight: 800;
    padding: 4px 12px;
    border-radius: 20px;
    white-space: nowrap;
}

.section-heading {
    font-size: 17px;
    font-weight: 800;
    color: #1a2636;
}

.section-subbar {
    border-right: 4px solid #a8823a;
    padding: 6px 14px;
    background: #faf8f5;
    color: #475569;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 16px;
    border-radius: 0 4px 4px 0;
}

.toc-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 24px;
}

.toc-item {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #1e293b;
}

.toc-num-dot {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #a8823a;
    color: #ffffff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 800;
    margin-left: 10px;
    flex-shrink: 0;
}

.toc-text {
    font-weight: 700;
    white-space: nowrap;
}

.toc-dots {
    flex-grow: 1;
    border-bottom: 1px dotted #cbd5e1;
    height: 1px;
    margin: 0 10px 4px 10px;
}

.toc-page {
    color: #a8823a;
    font-weight: 800;
    font-size: 13px;
}

.exec-summary-card {
    background-color: #1a2636;
    color: #ffffff;
    border: 1.5px solid #a8823a;
    border-radius: 6px;
    padding: 18px 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-bottom: 18px;
}

.exec-score-block {
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    padding-left: 24px;
    text-align: center;
}

.exec-score-num {
    font-size: 38px;
    font-weight: 900;
    color: #facc15;
    line-height: 1;
    margin-bottom: 4px;
}

.exec-score-label {
    font-size: 11.5px;
    color: #cbd5e1;
    font-weight: 600;
}

.exec-info-block {
    flex: 1;
}

.exec-stage-pill {
    display: inline-block;
    background: rgba(197, 160, 89, 0.25);
    border: 1px solid #c5a059;
    color: #facc15;
    padding: 3px 10px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 800;
    margin-bottom: 6px;
}

.exec-stage-title {
    font-size: 15px;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 6px;
}

.exec-stage-desc {
    font-size: 12px;
    color: #e2e8f0;
    line-height: 1.6;
}

.dims-container {
    display: flex;
    flex-direction: column;
    gap: 9px;
}

.dim-doc-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-right: 4px solid #a8823a;
    border-radius: 4px;
    padding: 9px 14px;
}

.dim-doc-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}

.dim-doc-title {
    font-size: 12.5px;
    font-weight: 800;
    color: #1a2636;
}

.dim-doc-meta {
    font-size: 11.5px;
    font-weight: 700;
    color: #a8823a;
}

.dim-bar-track {
    height: 6px;
    background: #f1f5f9;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 5px;
}

.dim-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #c5a059, #a8823a);
    border-radius: 4px;
}

.dim-doc-desc {
    font-size: 11px;
    color: #64748b;
    line-height: 1.5;
}

.scenario-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 14px 18px;
    margin-bottom: 14px;
}

.scenario-card-head {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13.5px;
    font-weight: 800;
    color: #1a2636;
    margin-bottom: 10px;
    padding-bottom: 6px;
    border-bottom: 1px solid #e2e8f0;
}

.scenario-list {
    list-style: none;
}

.scenario-list li {
    position: relative;
    padding-right: 18px;
    font-size: 12px;
    color: #334155;
    margin-bottom: 8px;
    line-height: 1.6;
}

.scenario-list li::before {
    content: "■";
    position: absolute;
    right: 0;
    color: #a8823a;
    font-size: 10px;
    top: 1px;
}

.roadmap-phase-box {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-right: 4px solid #1a2636;
    border-radius: 4px;
    padding: 11px 15px;
    margin-bottom: 9px;
}

.roadmap-phase-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12.5px;
    font-weight: 800;
    color: #1a2636;
    margin-bottom: 5px;
}

.phase-pill {
    background: #f1f5f9;
    color: #a8823a;
    font-size: 11px;
    font-weight: 800;
    padding: 2px 8px;
    border-radius: 4px;
}

.roadmap-list {
    list-style: none;
}

.roadmap-list li {
    font-size: 11.5px;
    color: #334155;
    margin-bottom: 3px;
    line-height: 1.5;
    position: relative;
    padding-right: 14px;
}

.roadmap-list li::before {
    content: "•";
    position: absolute;
    right: 0;
    color: #a8823a;
    font-weight: bold;
    font-size: 14px;
}

.closing-card {
    background: #faf8f5;
    border: 1.5px solid #a8823a;
    border-radius: 6px;
    padding: 12px 16px;
    margin-top: 8px;
}

.closing-title {
    color: #a8823a;
    font-size: 12.5px;
    font-weight: 800;
    margin-bottom: 7px;
    text-align: center;
}

.closing-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    font-size: 11px;
    color: #1e293b;
}

.closing-item {
    background: #ffffff;
    padding: 6px 10px;
    border-radius: 4px;
    border: 1px solid #e2e8f0;
}

.closing-item strong {
    color: #1a2636;
}
</style>
</head>
<body>

<!-- اسلاید ۱: جلد رسمی -->
<section class="slide-page">
    <div class="cover-top">
        <div class="cover-frame">
            <div class="cover-kicker-top">سنجش آمادگی سازمانی برای هوش مصنوعی</div>
            <div class="cover-title-group">
                <h1 class="cover-main-title">کارنامه بلوغ هوش مصنوعی و نقشه راه ۹۰ روزه</h1>
                <p class="cover-subtitle">ارزیابی جامع ۴۰ مؤلفه استاندارد در ۷ بعد کلیدی سازمان</p>
            </div>
            <div class="cover-kicker-bottom">HOUSHRAAN ORGANIZATIONAL AI READINESS REPORT</div>
        </div>
    </div>
    <div class="cover-bottom">
        <div class="cover-details">
            <div class="cover-details-tag">مشخصات ارزیابی رسمی</div>
            <div class="cover-org-name">${org}</div>
            <div class="cover-meta-item">ارزیابی‌شده توسط: <strong>${user}</strong> (${role})</div>
            <div class="cover-meta-item">صنعت / حوزه: <strong>${industry}</strong> | تاریخ: <strong>${dateFa}</strong></div>
            <div class="cover-meta-item">شاخص کل آمادگی: <strong style="color: #a8823a;">${results.overallAvg} از ۵ (${results.overallPercent}٪)</strong> | رتبه: <strong>${results.stage.title}</strong></div>
        </div>
        <div class="cover-logo-wrap">
            ${HOUSHRAN_VECTOR_LOGO}
        </div>
    </div>
</section>

<!-- اسلاید ۲: فهرست مطالب و خلاصه اجرایی -->
<section class="slide-page">
    <div class="doc-page-header">
        <span class="header-tag">TABLE OF CONTENTS & EXECUTIVE SUMMARY</span>
        <div class="header-logo">${HOUSHRAN_VECTOR_LOGO}</div>
    </div>
    <div class="doc-page-body">
        <div class="section-bar">
            <span class="section-badge">بخش اول</span>
            <h2 class="section-heading">فهرست مطالب و ساختار ارزیابی</h2>
        </div>

        <div class="toc-list">
            <div class="toc-item">
                <span class="toc-num-dot">۱</span>
                <span class="toc-text">خلاصه اجرایی و شاخص‌های کلیدی بلوغ هوش مصنوعی</span>
                <span class="toc-dots"></span>
                <span class="toc-page">صفحه ۲</span>
            </div>
            <div class="toc-item">
                <span class="toc-num-dot">۲</span>
                <span class="toc-text">وضعیت تفکیکی ابعاد ۷‌گانه سازمانی</span>
                <span class="toc-dots"></span>
                <span class="toc-page">صفحه ۳</span>
            </div>
            <div class="toc-item">
                <span class="toc-num-dot">۳</span>
                <span class="toc-text">تحلیل راهبردی شکاف‌ها و نقاط قوت کلیدی</span>
                <span class="toc-dots"></span>
                <span class="toc-page">صفحه ۴</span>
            </div>
            <div class="toc-item">
                <span class="toc-num-dot">۴</span>
                <span class="toc-text">نقشه راه عملیاتی ۹۰ روزه تحول و قواعد استقرار</span>
                <span class="toc-dots"></span>
                <span class="toc-page">صفحه ۵</span>
            </div>
        </div>

        <div class="exec-summary-card">
            <div class="exec-score-block">
                <div class="exec-score-num">${results.overallAvg}</div>
                <div class="exec-score-label">شاخص آمادگی هوش مصنوعی (از ۵)</div>
                <div style="font-size: 11px; color: #cbd5e1; margin-top: 4px;">تحقق ${results.overallPercent}٪ ظرفیت مطلوب</div>
            </div>
            <div class="exec-info-block">
                <span class="exec-stage-pill">${results.stage.badge}</span>
                <h3 class="exec-stage-title">${results.stage.title}</h3>
                <p class="exec-stage-desc">${results.stage.desc}</p>
            </div>
        </div>

        <div class="section-subbar">
            <strong>دامنه ارزیابی:</strong> ۴۰ مؤلفه استاندارد در ۷ بعد استراتژی، ارزش کسب‌وکار، مهارت و فرهنگ، حاکمیت و ریسک، داده، فناوری و مدل عملیاتی.
        </div>
    </div>
    <div class="doc-page-footer">صفحه ۲ از ۵</div>
</section>

<!-- اسلاید ۳: ابعاد ۷‌گانه -->
<section class="slide-page">
    <div class="doc-page-header">
        <span class="header-tag">DIMENSION BREAKDOWN</span>
        <div class="header-logo">${HOUSHRAN_VECTOR_LOGO}</div>
    </div>
    <div class="doc-page-body">
        <div class="section-bar">
            <span class="section-badge">بخش دوم</span>
            <h2 class="section-heading">وضعیت تفکیکی ابعاد ۷‌گانه سازمانی</h2>
        </div>
        <div class="section-subbar">
            سنجش وزن‌دار ابعاد بر پایه میانگین نمرات مؤلفه‌ها (۱ تا ۵) با کسر شاخص‌های غیرقابل‌اعمال (N/A)
        </div>

        <div class="dims-container">
            ${dimsCardsHtml}
        </div>
    </div>
    <div class="doc-page-footer">صفحه ۳ از ۵</div>
</section>

<!-- اسلاید ۴: شکاف‌ها و تحلیل راهبردی -->
<section class="slide-page">
    <div class="doc-page-header">
        <span class="header-tag">STRATEGIC GAP ANALYSIS</span>
        <div class="header-logo">${HOUSHRAN_VECTOR_LOGO}</div>
    </div>
    <div class="doc-page-body">
        <div class="section-bar">
            <span class="section-badge">بخش سوم</span>
            <h2 class="section-heading">تحلیل راهبردی شکاف‌ها و نقاط قوت کلیدی</h2>
        </div>
        <div class="section-subbar">
            اولویت‌بندی اقدامات بر مبنای حداکثر بازدهی و کمترین ریسک هدررفت منابع سازمانی
        </div>

        <div class="scenario-card">
            <div class="scenario-card-head">
                <span style="color: #15803d;">★</span>
                <span>نقاط قوت سازمانی (پیشران‌های تحول)</span>
            </div>
            <ul class="scenario-list">
                ${strengthsHtml}
            </ul>
        </div>

        <div class="scenario-card" style="border-right-color: #c5a059;">
            <div class="scenario-card-head">
                <span style="color: #c5a059;">▲</span>
                <span>شکاف‌های اولویت‌دار نیازمند اقدام فوری (گلوگاه‌های استقرار)</span>
            </div>
            <ul class="scenario-list">
                ${gapsHtml}
            </ul>
        </div>

        <div class="scenario-card" style="background: #faf8f5; border-color: #a8823a;">
            <div class="scenario-card-head" style="color: #a8823a;">
                <span>توصیه راهبردی تیم مشاوران هوشران</span>
            </div>
            <p style="font-size: 11.5px; color: #334155; line-height: 1.7;">
                جهت جلوگیری از پراکندگی فعالیت‌ها و اتلاف منابع، پیشنهاد می‌شود اقدامات اجرایی ابتدا بر روی رفع گلوگاه‌های حاکمیتی و آموزش کارشناسان کلیدی در قالب پروژه‌های زودهنگام متمرکز گردد.
            </p>
        </div>
    </div>
    <div class="doc-page-footer">صفحه ۴ از ۵</div>
</section>

<!-- اسلاید ۵: نقشه راه ۹۰ روزه -->
<section class="slide-page">
    <div class="doc-page-header">
        <span class="header-tag">90-DAY ACTION ROADMAP</span>
        <div class="header-logo">${HOUSHRAN_VECTOR_LOGO}</div>
    </div>
    <div class="doc-page-body">
        <div class="section-bar">
            <span class="section-badge">بخش چهارم</span>
            <h2 class="section-heading">نقشه راه عملیاتی ۹۰ روزه تحول و قواعد استقرار</h2>
        </div>
        <div class="section-subbar">
            برنامه اجرایی زمان‌بندی‌شده مبتنی بر متدولوژی پیاده‌سازی کاربردی هوشران
        </div>

        <div class="roadmap-phase-box">
            <div class="roadmap-phase-title">
                <span>فاز اول: هم‌راستاسازی و سواد پایه</span>
                <span class="phase-pill">روز ۱ تا ۳۰</span>
            </div>
            <ul class="roadmap-list">
                <li>تدوین سند خط‌مشی استفاده مسئولانه و ضوابط محرمانگی داده‌های سازمان.</li>
                <li>برگزاری دوره <strong>انسان هوشران</strong> برای مدیران میانی و کارشناسان کلیدی.</li>
                <li>شناسایی و اولویت‌بندی ۳ کاربرد با بازده سریع (Quick Wins) در جریان کاری.</li>
            </ul>
        </div>

        <div class="roadmap-phase-box">
            <div class="roadmap-phase-title">
                <span>فاز دوم: پایلوت‌ها و بازطراحی فرایندها</span>
                <span class="phase-pill">روز ۳۱ تا ۶۰</span>
            </div>
            <ul class="roadmap-list">
                <li>پیاده‌سازی مسیر <strong>فروش با هوش مصنوعی</strong> در تیم‌های بازاریابی و فروش.</li>
                <li>ساخت کتابخانه پرامپت‌های پایدار و استاندارد برای وظایف پرتکرار اداری و تحلیلی.</li>
                <li>سنجش دقیق صرفه‌جویی زمانی و کیفیت خروجی‌ها در فرایندهای منتخب.</li>
            </ul>
        </div>

        <div class="roadmap-phase-box">
            <div class="roadmap-phase-title">
                <span>فاز سوم: تثبیت، استانداردسازی و توسعه</span>
                <span class="phase-pill">روز ۶۱ تا ۹۰</span>
            </div>
            <ul class="roadmap-list">
                <li>استقرار سازوکار نظارت انسانی (Human-in-the-Loop) و ارتقای کیفیت داده‌ها.</li>
                <li>تشکیل شبکه مروجان سازمانی هوش مصنوعی جهت پشتیبانی هم‌ترازان.</li>
                <li>سنجش بازده سرمایه (ROI) و بازطراحی فرایندهای مقیاس‌پذیر در کل سازمان.</li>
            </ul>
        </div>

        <div class="closing-card">
            <div class="closing-title">«قاعده چهارگانه طلایی هوشران برای هوش مصنوعی در کار واقعی»</div>
            <div class="closing-grid">
                <div class="closing-item"><strong>۱. کار واقعی:</strong> تمرکز بر بازده کاری به‌جای نمایش تزیینی</div>
                <div class="closing-item"><strong>۲. نظارت انسانی:</strong> تصمیم‌گیری نهایی همواره بر عهده انسان</div>
                <div class="closing-item"><strong>۳. تکرارپذیری:</strong> خلق جریان‌های پایدار، مستند و قابل بازتولید</div>
                <div class="closing-item"><strong>۴. امنیت داده:</strong> حفظ کامل محرمانگی و اعتماد سازمانی</div>
            </div>
        </div>

        <div style="margin-top: 10px; display: flex; justify-content: space-between; align-items: center; font-size: 11px; color: #64748b; padding-top: 8px; border-top: 1px solid #e2e8f0;">
            <span>وب‌سایت رسمی: <strong>www.houshraan.ir</strong></span>
            <span>ایمیل سازمانی: <strong>info@houshraan.ir</strong></span>
            <span>پشتیبانی تلگرام: <strong>@houshraan_Sup</strong></span>
        </div>
    </div>
    <div class="doc-page-footer">صفحه ۵ از ۵</div>
</section>

</body>
</html>`;
}

// تابع چاپ مستقیم یا ذخیره کتابچه رسمی PDF در مرورگر (سازگار ۱۰۰٪ با گیت‌هاب و لوکال)
window.exportHoushranOfficialPdf = function() {
    const results = calculateScores();
    const docHtml = buildHoushranSlideDocHtml(results);

    // باز کردن پنجره اختصاصی چاپ برای ارائه خروجی تمیز بدون نوبار و المان‌های سایت
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        alert('لطفاً اجازه باز شدن پنجره پاپ‌آپ را در مرورگر خود بدهید تا کتابچه رسمی PDF صادر شود.');
        return;
    }

    printWindow.document.open();
    printWindow.document.write(docHtml);
    printWindow.document.close();

    // اندکی تأمل جهت لود کامل فونت‌ها و ترسیم وکتورها در پنجره جدید
    printWindow.onload = function() {
        setTimeout(() => {
            printWindow.focus();
            printWindow.print();
        }, 300);
    };
};

// پیش‌نمایش تمام‌صفحه کتابچه اسلایدداک (Modal Viewer)
window.openHoushranSlideDocViewer = function() {
    const results = calculateScores();
    const docHtml = buildHoushranSlideDocHtml(results);

    let modal = document.getElementById('slidedoc-preview-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'slidedoc-preview-modal';
        modal.className = 'slidedoc-modal';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="slidedoc-modal__backdrop" onclick="closeHoushranSlideDocViewer()"></div>
        <div class="slidedoc-modal__container">
            <div class="slidedoc-modal__toolbar">
                <div class="slidedoc-modal__title">
                    <span>پیش‌نمایش کتابچه رسمی هوشران (۵ اسلاید استاندارد A4)</span>
                </div>
                <div class="slidedoc-modal__actions">
                    <button class="btn btn--primary btn--sm" onclick="exportHoushranOfficialPdf()">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                        چاپ و ذخیره PDF
                    </button>
                    <button class="btn btn--outline btn--sm" onclick="closeHoushranSlideDocViewer()">
                        بستن
                    </button>
                </div>
            </div>
            <div class="slidedoc-modal__body">
                <iframe id="slidedoc-frame" class="slidedoc-iframe" title="SlideDoc Preview"></iframe>
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    const frame = document.getElementById('slidedoc-frame');
    if (frame) {
        frame.contentWindow.document.open();
        frame.contentWindow.document.write(docHtml);
        frame.contentWindow.document.close();
    }
};

window.closeHoushranSlideDocViewer = function() {
    const modal = document.getElementById('slidedoc-preview-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
};
