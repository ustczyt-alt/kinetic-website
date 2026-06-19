const DOWNLOAD_URL = "https://play.google.com/store/apps/details?id=com.gaitimes.heartbeat";

const baseText = {
  brand: "KINETIC",
  navFeatures: "Features",
  navPrivacy: "Privacy",
  navDownload: "Download",
  languageLabel: "Language",
  eyebrow: "Bluetooth heart rate training",
  heroTitle: "Move with your heart.",
  heroText: "Connect a compatible BLE heart rate device, watch your live BPM, record sessions, and review your effort with clean training history.",
  downloadButton: "Download for Android",
  learnMore: "Explore features",
  statLive: "Live",
  statLiveText: "BPM display",
  statBle: "BLE",
  statBleText: "Connect and broadcast",
  statData: "Local",
  statDataText: "History by default",
  previewLive: "Live",
  previewConnected: "Connected",
  previewUnit: "BPM",
  previewBelow: "Below",
  previewInZone: "In target",
  previewAbove: "Above",
  previewDuration: "Duration",
  previewAvg: "Avg HR",
  previewMax: "Max HR",
  noteTitle: "Long Battery Mode",
  noteText: "Built for longer outdoor sessions.",
  featuresEyebrow: "Training clarity",
  featuresTitle: "Everything you need during and after a session.",
  featureLiveTitle: "Real-time monitoring",
  featureLiveText: "View heart rate from compatible Bluetooth devices with connect mode or broadcast mode.",
  featureZoneTitle: "Target zones",
  featureZoneText: "Set your lower and upper heart rate targets, then get simple zone-change alerts.",
  featureHistoryTitle: "Workout history",
  featureHistoryText: "Review duration, average BPM, maximum BPM, minimum BPM, and recorded heart-rate curves.",
  featureDataTitle: "Data control",
  featureDataText: "Import and export KINETIC history files through the system file picker when you choose.",
  privacyEyebrow: "Privacy and health notice",
  privacyTitle: "Your workout history stays on your device by default.",
  privacyText: "KINETIC is for personal fitness and workout review only. It is not a medical device and does not provide diagnosis, treatment advice, emergency monitoring, or clinical decision support.",
  privacyPoint1: "Export and sharing happen only when you choose them.",
  privacyPoint2: "Ad privacy choices are available where required.",
  privacyPoint3: "Health, permissions, privacy notice, and terms are available in Settings.",
  downloadEyebrow: "Get KINETIC",
  downloadTitle: "Open the Android download link.",
  downloadText: "Use the Play Store link below when the listing is available in your region.",
  footerCopyright: "Copyright 2026 Gaitimes. All rights reserved.",
  footerPrivacy: "Privacy"
};

const translations = {
  en: baseText,
  "zh-CN": {
    ...baseText,
    navFeatures: "功能",
    navPrivacy: "隐私",
    navDownload: "下载",
    languageLabel: "语言",
    eyebrow: "蓝牙心率训练",
    heroTitle: "跟着心率训练。",
    heroText: "连接兼容的 BLE 心率设备，查看实时 BPM，记录训练，并用清晰的历史数据回顾每一次努力。",
    downloadButton: "下载 Android 版",
    learnMore: "查看功能",
    statLive: "实时",
    statLiveText: "BPM 显示",
    statDataText: "本地历史记录",
    previewLive: "实时",
    previewConnected: "已连接",
    previewUnit: "BPM",
    previewBelow: "偏低",
    previewInZone: "目标内",
    previewAbove: "偏高",
    previewDuration: "时长",
    previewAvg: "平均心率",
    previewMax: "最高心率",
    noteTitle: "长续航模式",
    noteText: "适合更长时间的户外训练。",
    featuresEyebrow: "训练更清晰",
    featuresTitle: "训练中和训练后需要的功能，都在这里。",
    featureLiveTitle: "实时监测",
    featureLiveText: "通过连接模式或广播模式查看兼容蓝牙心率设备的数据。",
    featureZoneTitle: "目标区间",
    featureZoneText: "设置心率上下限，并在区间变化时获得简单提醒。",
    featureHistoryTitle: "训练历史",
    featureHistoryText: "回顾时长、平均 BPM、最高 BPM、最低 BPM 和心率曲线。",
    featureDataTitle: "数据控制",
    featureDataText: "需要时通过系统文件选择器导入或导出 KINETIC 历史记录。",
    privacyEyebrow: "隐私与健康说明",
    privacyTitle: "训练历史默认保存在你的设备上。",
    privacyText: "KINETIC 仅用于个人健身和训练回顾。它不是医疗设备，不提供诊断、治疗建议、紧急监测或临床决策支持。",
    privacyPoint1: "只有你主动选择时，才会导出或分享数据。",
    privacyPoint2: "在适用地区可管理广告隐私选择。",
    privacyPoint3: "健康、权限、隐私说明和条款可在设置中查看。",
    downloadEyebrow: "获取 KINETIC",
    downloadTitle: "打开 Android 下载链接。",
    downloadText: "当应用在你所在地区上线后，可使用下方 Play Store 链接。",
    footerPrivacy: "隐私"
  },
  "zh-TW": {
    ...baseText,
    navFeatures: "功能",
    navPrivacy: "隱私",
    navDownload: "下載",
    languageLabel: "語言",
    eyebrow: "藍牙心率訓練",
    heroTitle: "跟著心率訓練。",
    heroText: "連接相容的 BLE 心率裝置，查看即時 BPM，記錄訓練，並用清楚的歷史資料回顧每一次努力。",
    downloadButton: "下載 Android 版",
    learnMore: "查看功能",
    previewConnected: "已連線",
    previewBelow: "偏低",
    previewInZone: "目標內",
    previewAbove: "偏高",
    previewDuration: "時長",
    previewAvg: "平均心率",
    previewMax: "最高心率",
    noteTitle: "長續航模式",
    noteText: "適合更長時間的戶外訓練。",
    featuresTitle: "訓練中和訓練後需要的功能，都在這裡。",
    privacyTitle: "訓練歷史預設保存在你的裝置上。",
    privacyText: "KINETIC 僅用於個人健身和訓練回顧。它不是醫療裝置，不提供診斷、治療建議、緊急監測或臨床決策支援。",
    downloadTitle: "開啟 Android 下載連結。",
    footerPrivacy: "隱私"
  },
  ja: {
    ...baseText,
    navFeatures: "機能",
    navPrivacy: "プライバシー",
    navDownload: "ダウンロード",
    languageLabel: "言語",
    eyebrow: "Bluetooth 心拍トレーニング",
    heroTitle: "心拍に合わせて動こう。",
    heroText: "対応する BLE 心拍デバイスに接続し、リアルタイム BPM、記録、履歴をすばやく確認できます。",
    downloadButton: "Android 版をダウンロード",
    learnMore: "機能を見る",
    previewConnected: "接続済み",
    previewBelow: "低め",
    previewInZone: "目標内",
    previewAbove: "高め",
    previewDuration: "時間",
    previewAvg: "平均心拍",
    previewMax: "最大心拍",
    noteTitle: "長時間バッテリーモード",
    noteText: "長い屋外セッション向けに設計されています。",
    featuresTitle: "運動中も運動後も必要なものをシンプルに。",
    privacyTitle: "ワークアウト履歴は既定で端末内に保存されます。",
    privacyText: "KINETIC は個人のフィットネス確認用です。医療機器ではなく、診断、治療助言、緊急監視、臨床判断支援は提供しません。",
    downloadTitle: "Android ダウンロードリンクを開く。",
    footerPrivacy: "プライバシー"
  },
  ko: {
    ...baseText,
    navFeatures: "기능",
    navPrivacy: "개인정보",
    navDownload: "다운로드",
    languageLabel: "언어",
    eyebrow: "Bluetooth 심박수 트레이닝",
    heroTitle: "심박수에 맞춰 움직이세요.",
    heroText: "호환 BLE 심박수 기기를 연결하고 실시간 BPM, 기록, 운동 이력을 확인하세요.",
    downloadButton: "Android용 다운로드",
    learnMore: "기능 보기",
    previewConnected: "연결됨",
    previewBelow: "낮음",
    previewInZone: "목표 범위",
    previewAbove: "높음",
    previewDuration: "시간",
    previewAvg: "평균 심박수",
    previewMax: "최대 심박수",
    noteTitle: "긴 배터리 모드",
    noteText: "긴 야외 운동에 적합합니다.",
    featuresTitle: "운동 중과 운동 후 필요한 기능을 간결하게 제공합니다.",
    privacyTitle: "운동 기록은 기본적으로 기기에 저장됩니다.",
    privacyText: "KINETIC은 개인 피트니스와 운동 기록 확인용입니다. 의료기기가 아니며 진단, 치료 조언, 응급 모니터링 또는 임상 의사결정 지원을 제공하지 않습니다.",
    downloadTitle: "Android 다운로드 링크 열기.",
    footerPrivacy: "개인정보"
  },
  es: {
    ...baseText,
    navFeatures: "Funciones",
    navPrivacy: "Privacidad",
    navDownload: "Descargar",
    languageLabel: "Idioma",
    eyebrow: "Entrenamiento de frecuencia cardiaca Bluetooth",
    heroTitle: "Muévete con tu corazón.",
    heroText: "Conecta un dispositivo BLE compatible, mira tu BPM en vivo, registra sesiones y revisa tu esfuerzo con un historial claro.",
    downloadButton: "Descargar para Android",
    learnMore: "Ver funciones",
    previewConnected: "Conectado",
    previewDuration: "Duración",
    previewAvg: "FC media",
    previewMax: "FC máx.",
    noteTitle: "Modo de batería larga",
    privacyTitle: "Tu historial permanece en tu dispositivo por defecto.",
    footerPrivacy: "Privacidad"
  },
  pt: {
    ...baseText,
    navFeatures: "Recursos",
    navPrivacy: "Privacidade",
    navDownload: "Baixar",
    languageLabel: "Idioma",
    eyebrow: "Treino de frequência cardíaca Bluetooth",
    heroTitle: "Mova-se com seu coração.",
    heroText: "Conecte um dispositivo BLE compatível, veja BPM ao vivo, grave sessões e revise seu esforço com histórico claro.",
    downloadButton: "Baixar para Android",
    learnMore: "Ver recursos",
    previewConnected: "Conectado",
    previewDuration: "Duração",
    previewAvg: "FC média",
    previewMax: "FC máx.",
    noteTitle: "Modo de bateria longa",
    privacyTitle: "Seu histórico fica no dispositivo por padrão.",
    footerPrivacy: "Privacidade"
  },
  fr: {
    ...baseText,
    navFeatures: "Fonctions",
    navPrivacy: "Confidentialité",
    navDownload: "Télécharger",
    languageLabel: "Langue",
    eyebrow: "Entraînement cardio Bluetooth",
    heroTitle: "Bougez avec votre cœur.",
    heroText: "Connectez un appareil BLE compatible, suivez vos BPM en direct, enregistrez vos séances et relisez vos efforts clairement.",
    downloadButton: "Télécharger pour Android",
    learnMore: "Voir les fonctions",
    previewConnected: "Connecté",
    previewDuration: "Durée",
    previewAvg: "FC moy.",
    previewMax: "FC max",
    noteTitle: "Mode longue batterie",
    privacyTitle: "Votre historique reste sur votre appareil par défaut.",
    footerPrivacy: "Confidentialité"
  }
};

const languageAliases = {
  zh: "zh-CN",
  "zh-Hans": "zh-CN",
  "zh-Hant": "zh-TW",
  "zh-HK": "zh-TW",
  "zh-MO": "zh-TW"
};

function resolveLanguage(value) {
  const requested = value && value !== "auto" ? value : navigator.language || "en";
  const normalized = languageAliases[requested] || requested;
  if (translations[normalized]) return normalized;
  const prefix = normalized.split("-")[0];
  return translations[prefix] ? prefix : "en";
}

function setLanguage(value) {
  const selected = resolveLanguage(value);
  document.documentElement.lang = selected;
  localStorage.setItem("kinetic-site-language", value || "auto");
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[selected][key] || translations.en[key] || "";
  });
  const picker = document.getElementById("languageSelect");
  if (picker) picker.value = value || "auto";
}

function initLanguage() {
  const picker = document.getElementById("languageSelect");
  const saved = localStorage.getItem("kinetic-site-language") || "auto";
  setLanguage(saved);
  if (picker) {
    picker.addEventListener("change", (event) => setLanguage(event.target.value));
  }
}

function initDownload() {
  const buttons = [document.getElementById("downloadButton"), document.getElementById("downloadButtonBottom")];
  buttons.forEach((button) => {
    if (button) {
      button.href = DOWNLOAD_URL;
      button.rel = "noopener";
    }
  });
  const text = document.getElementById("downloadUrlText");
  if (text) text.textContent = DOWNLOAD_URL;
  const canvas = document.getElementById("downloadQr");
  if (canvas) drawQrPlaceholder(canvas);
}

function drawQrPlaceholder(canvas) {
  const ctx = canvas.getContext("2d");
  const size = canvas.width;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = "#17212B";
  const cell = Math.floor(size / 29);
  const offset = Math.floor((size - cell * 25) / 2);
  const drawFinder = (x, y) => {
    ctx.fillRect(offset + x * cell, offset + y * cell, cell * 7, cell * 7);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(offset + (x + 1) * cell, offset + (y + 1) * cell, cell * 5, cell * 5);
    ctx.fillStyle = "#17212B";
    ctx.fillRect(offset + (x + 2) * cell, offset + (y + 2) * cell, cell * 3, cell * 3);
  };
  drawFinder(0, 0);
  drawFinder(18, 0);
  drawFinder(0, 18);
  for (let y = 0; y < 25; y += 1) {
    for (let x = 0; x < 25; x += 1) {
      const reserved = (x < 8 && y < 8) || (x > 16 && y < 8) || (x < 8 && y > 16);
      if (!reserved && ((x * 13 + y * 7 + x * y) % 5 < 2)) {
        ctx.fillRect(offset + x * cell, offset + y * cell, cell, cell);
      }
    }
  }
}

initLanguage();
initDownload();
