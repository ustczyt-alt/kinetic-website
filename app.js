const DOWNLOAD_URL = "https://play.google.com/store/apps/details?id=com.gaitimes.heartbeat";

const baseText = {
  brand: "KINETIC",
  navFeatures: "Features",
  navPrivacy: "Privacy",
  navDownload: "Download",
  navSupport: "Support",
  languageLabel: "Language",
  systemDefault: "System Default",
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
  footerPrivacy: "Privacy",
  footerTerms: "Terms",
  footerSupport: "Support"
};

const translations = {
  en: baseText,
  "zh-CN": {
    ...baseText,
    navFeatures: "功能",
    navPrivacy: "隐私",
    navDownload: "下载",
    navSupport: "支持",
    languageLabel: "语言",
    systemDefault: "跟随系统",
    eyebrow: "蓝牙心率训练",
    heroTitle: "跟着心率训练。",
    heroText: "连接兼容的 BLE 心率设备，查看实时 BPM，记录训练，并用清晰的历史数据回顾每一次努力。",
    downloadButton: "下载 Android 版",
    learnMore: "查看功能",
    statLive: "实时",
    statLiveText: "BPM 显示",
    statBleText: "连接与广播",
    statData: "本机",
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
    footerPrivacy: "隐私",
    footerTerms: "条款",
    footerSupport: "支持"
  },
  "zh-TW": {
    ...baseText,
    navFeatures: "功能",
    navPrivacy: "隱私",
    navDownload: "下載",
    navSupport: "支援",
    languageLabel: "語言",
    systemDefault: "跟隨系統",
    eyebrow: "藍牙心率訓練",
    heroTitle: "跟著心率訓練。",
    heroText: "連接相容的 BLE 心率裝置，查看即時 BPM，記錄訓練，並用清楚的歷史資料回顧每一次努力。",
    downloadButton: "下載 Android 版",
    learnMore: "查看功能",
    statLive: "即時",
    statLiveText: "BPM 顯示",
    statBle: "BLE",
    statBleText: "連線與廣播",
    statData: "本機",
    statDataText: "預設本機歷史",
    previewLive: "即時",
    previewConnected: "已連線",
    previewUnit: "BPM",
    previewBelow: "偏低",
    previewInZone: "目標內",
    previewAbove: "偏高",
    previewDuration: "時長",
    previewAvg: "平均心率",
    previewMax: "最高心率",
    noteTitle: "長續航模式",
    noteText: "適合更長時間的戶外訓練。",
    featuresEyebrow: "清楚掌握訓練",
    featuresTitle: "訓練中和訓練後需要的功能，都在這裡。",
    featureLiveTitle: "即時監測",
    featureLiveText: "透過連線或廣播模式查看相容藍牙心率裝置的資料。",
    featureZoneTitle: "目標區間",
    featureZoneText: "設定心率上下限，並在區間變化時獲得簡單提醒。",
    featureHistoryTitle: "訓練歷史",
    featureHistoryText: "回顧時長、平均 BPM、最高 BPM、最低 BPM 和心率曲線。",
    featureDataTitle: "資料控制",
    featureDataText: "需要時透過系統檔案選擇器匯入或匯出 KINETIC 歷史紀錄。",
    privacyEyebrow: "隱私與健康說明",
    privacyTitle: "訓練歷史預設保存在你的裝置上。",
    privacyText: "KINETIC 僅用於個人健身和訓練回顧。它不是醫療裝置，不提供診斷、治療建議、緊急監測或臨床決策支援。",
    privacyPoint1: "只有你主動選擇時，才會匯出或分享資料。",
    privacyPoint2: "在適用地區可管理廣告隱私選擇。",
    privacyPoint3: "健康、權限、隱私說明和條款可在設定中查看。",
    downloadEyebrow: "取得 KINETIC",
    downloadTitle: "開啟 Android 下載連結。",
    downloadText: "應用程式在你所在的地區上線後，可使用下方 Play Store 連結。",
    footerPrivacy: "隱私",
    footerTerms: "條款",
    footerSupport: "支援"
  },
  ja: {
    ...baseText,
    navFeatures: "機能",
    navPrivacy: "プライバシー",
    navDownload: "ダウンロード",
    navSupport: "サポート",
    languageLabel: "言語",
    systemDefault: "システム設定",
    eyebrow: "Bluetooth 心拍トレーニング",
    heroTitle: "心拍に合わせて動こう。",
    heroText: "対応する BLE 心拍デバイスに接続し、リアルタイム BPM、記録、履歴をすばやく確認できます。",
    downloadButton: "Android 版をダウンロード",
    learnMore: "機能を見る",
    statLive: "ライブ",
    statLiveText: "BPM 表示",
    statBle: "BLE",
    statBleText: "接続とブロードキャスト",
    statData: "端末内",
    statDataText: "履歴を既定で保存",
    previewLive: "ライブ",
    previewConnected: "接続済み",
    previewUnit: "BPM",
    previewBelow: "低め",
    previewInZone: "目標内",
    previewAbove: "高め",
    previewDuration: "時間",
    previewAvg: "平均心拍",
    previewMax: "最大心拍",
    noteTitle: "長時間バッテリーモード",
    noteText: "長い屋外セッション向けに設計されています。",
    featuresEyebrow: "トレーニングを明確に",
    featuresTitle: "運動中も運動後も必要なものをシンプルに。",
    featureLiveTitle: "リアルタイムモニタリング",
    featureLiveText: "接続またはブロードキャストモードで対応 Bluetooth 機器の心拍数を表示します。",
    featureZoneTitle: "目標ゾーン",
    featureZoneText: "心拍数の上限と下限を設定し、ゾーン変更時に通知を受け取れます。",
    featureHistoryTitle: "ワークアウト履歴",
    featureHistoryText: "時間、平均・最大・最小 BPM、記録した心拍曲線を確認できます。",
    featureDataTitle: "データ管理",
    featureDataText: "システムのファイル選択画面から KINETIC 履歴を読み込み・書き出しできます。",
    privacyEyebrow: "プライバシーと健康に関する通知",
    privacyTitle: "ワークアウト履歴は既定で端末内に保存されます。",
    privacyText: "KINETIC は個人のフィットネス確認用です。医療機器ではなく、診断、治療助言、緊急監視、臨床判断支援は提供しません。",
    privacyPoint1: "書き出しや共有は、ユーザーが選択した場合にのみ行われます。",
    privacyPoint2: "必要な地域では広告プライバシー設定を利用できます。",
    privacyPoint3: "健康、権限、プライバシー通知、利用規約は設定で確認できます。",
    downloadEyebrow: "KINETIC を入手",
    downloadTitle: "Android ダウンロードリンクを開く。",
    downloadText: "お住まいの地域で公開後、下の Play Store リンクから入手できます。",
    footerPrivacy: "プライバシー",
    footerTerms: "利用規約",
    footerSupport: "サポート"
  },
  ko: {
    ...baseText,
    navFeatures: "기능",
    navPrivacy: "개인정보",
    navDownload: "다운로드",
    navSupport: "지원",
    languageLabel: "언어",
    systemDefault: "시스템 기본값",
    eyebrow: "Bluetooth 심박수 트레이닝",
    heroTitle: "심박수에 맞춰 움직이세요.",
    heroText: "호환 BLE 심박수 기기를 연결하고 실시간 BPM, 기록, 운동 이력을 확인하세요.",
    downloadButton: "Android용 다운로드",
    learnMore: "기능 보기",
    statLive: "실시간",
    statLiveText: "BPM 표시",
    statBle: "BLE",
    statBleText: "연결 및 브로드캐스트",
    statData: "기기 저장",
    statDataText: "기본 로컬 기록",
    previewLive: "실시간",
    previewConnected: "연결됨",
    previewUnit: "BPM",
    previewBelow: "낮음",
    previewInZone: "목표 범위",
    previewAbove: "높음",
    previewBelow: "낮음",
    previewInZone: "목표 범위",
    previewAbove: "높음",
    previewDuration: "시간",
    previewAvg: "평균 심박수",
    previewMax: "최대 심박수",
    noteTitle: "긴 배터리 모드",
    noteText: "긴 야외 운동에 적합합니다.",
    featuresEyebrow: "명확한 트레이닝",
    featuresTitle: "운동 중과 운동 후 필요한 기능을 간결하게 제공합니다.",
    featureLiveTitle: "실시간 모니터링",
    featureLiveText: "연결 또는 브로드캐스트 모드로 호환 Bluetooth 기기의 심박수를 확인합니다.",
    featureZoneTitle: "목표 구간",
    featureZoneText: "심박수 상한과 하한을 설정하고 구간 변경 알림을 받을 수 있습니다.",
    featureHistoryTitle: "운동 기록",
    featureHistoryText: "시간, 평균·최대·최소 BPM과 기록된 심박수 곡선을 확인합니다.",
    featureDataTitle: "데이터 관리",
    featureDataText: "시스템 파일 선택기로 KINETIC 기록을 가져오거나 내보냅니다.",
    privacyEyebrow: "개인정보 및 건강 안내",
    privacyTitle: "운동 기록은 기본적으로 기기에 저장됩니다.",
    privacyText: "KINETIC은 개인 피트니스와 운동 기록 확인용입니다. 의료기기가 아니며 진단, 치료 조언, 응급 모니터링 또는 임상 의사결정 지원을 제공하지 않습니다.",
    privacyPoint1: "내보내기와 공유는 사용자가 선택한 경우에만 이루어집니다.",
    privacyPoint2: "필요한 지역에서는 광고 개인정보 설정을 사용할 수 있습니다.",
    privacyPoint3: "건강, 권한, 개인정보 안내 및 약관은 설정에서 확인할 수 있습니다.",
    downloadEyebrow: "KINETIC 받기",
    downloadTitle: "Android 다운로드 링크 열기.",
    downloadText: "거주 지역에 출시되면 아래 Play Store 링크를 사용할 수 있습니다.",
    footerPrivacy: "개인정보",
    footerTerms: "이용약관",
    footerSupport: "지원"
  },
  es: {
    ...baseText,
    navFeatures: "Funciones",
    navPrivacy: "Privacidad",
    navDownload: "Descargar",
    navSupport: "Soporte",
    languageLabel: "Idioma",
    systemDefault: "Predeterminado del sistema",
    eyebrow: "Entrenamiento de frecuencia cardiaca Bluetooth",
    heroTitle: "Muévete con tu corazón.",
    heroText: "Conecta un dispositivo BLE compatible, mira tu BPM en vivo, registra sesiones y revisa tu esfuerzo con un historial claro.",
    downloadButton: "Descargar para Android",
    learnMore: "Ver funciones",
    statLive: "En vivo",
    statLiveText: "Visualización BPM",
    statBle: "BLE",
    statBleText: "Conexión y difusión",
    statData: "En el dispositivo",
    statDataText: "Historial en el dispositivo",
    previewLive: "En vivo",
    previewConnected: "Conectado",
    previewUnit: "PPM",
    previewBelow: "Bajo",
    previewInZone: "En objetivo",
    previewAbove: "Alto",
    previewDuration: "Duración",
    previewAvg: "FC media",
    previewMax: "FC máx.",
    noteTitle: "Modo de batería larga",
    noteText: "Diseñado para sesiones largas al aire libre.",
    featuresEyebrow: "Claridad de entrenamiento",
    featuresTitle: "Todo lo necesario durante y después de una sesión.",
    featureLiveTitle: "Monitoreo en tiempo real",
    featureLiveText: "Consulta el ritmo cardíaco de dispositivos Bluetooth compatibles por conexión o difusión.",
    featureZoneTitle: "Zonas objetivo",
    featureZoneText: "Define límites de ritmo cardíaco y recibe alertas sencillas al cambiar de zona.",
    featureHistoryTitle: "Historial de entrenamiento",
    featureHistoryText: "Revisa duración, PPM promedio, máximo, mínimo y curvas registradas.",
    featureDataTitle: "Control de datos",
    featureDataText: "Importa y exporta el historial de KINETIC mediante el selector de archivos del sistema.",
    privacyEyebrow: "Privacidad y aviso de salud",
    privacyTitle: "Tu historial permanece en tu dispositivo por defecto.",
    privacyText: "KINETIC es solo para fitness personal y revisión de entrenamientos. No es un dispositivo médico y no ofrece diagnóstico, tratamiento, monitorización de emergencia ni apoyo clínico.",
    privacyPoint1: "Los datos se exportan o comparten solo cuando tú lo decides.",
    privacyPoint2: "Las opciones de privacidad de anuncios están disponibles donde corresponde.",
    privacyPoint3: "Salud, permisos, privacidad y términos están disponibles en Ajustes.",
    downloadEyebrow: "Obtén KINETIC",
    downloadTitle: "Abre el enlace de descarga para Android.",
    downloadText: "Cuando esté disponible en tu región, utiliza el enlace de Play Store.",
    footerPrivacy: "Privacidad",
    footerTerms: "Términos",
    footerSupport: "Soporte"
  },
  pt: {
    ...baseText,
    navFeatures: "Recursos",
    navPrivacy: "Privacidade",
    navDownload: "Baixar",
    navSupport: "Suporte",
    languageLabel: "Idioma",
    systemDefault: "Padrão do sistema",
    eyebrow: "Treino de frequência cardíaca Bluetooth",
    heroTitle: "Mova-se com seu coração.",
    heroText: "Conecte um dispositivo BLE compatível, veja BPM ao vivo, grave sessões e revise seu esforço com histórico claro.",
    downloadButton: "Baixar para Android",
    learnMore: "Ver recursos",
    statLive: "Ao vivo",
    statLiveText: "Exibição de BPM",
    statBle: "BLE",
    statBleText: "Conexão e transmissão",
    statData: "No dispositivo",
    statDataText: "Histórico no dispositivo",
    previewLive: "Ao vivo",
    previewConnected: "Conectado",
    previewUnit: "BPM",
    previewBelow: "Abaixo",
    previewInZone: "Na meta",
    previewAbove: "Acima",
    previewDuration: "Duração",
    previewAvg: "FC média",
    previewMax: "FC máx.",
    noteTitle: "Modo de bateria longa",
    noteText: "Feito para sessões longas ao ar livre.",
    featuresEyebrow: "Treino com clareza",
    featuresTitle: "Tudo o que você precisa durante e depois de uma sessão.",
    featureLiveTitle: "Monitoramento em tempo real",
    featureLiveText: "Veja a frequência cardíaca de dispositivos Bluetooth compatíveis por conexão ou transmissão.",
    featureZoneTitle: "Zonas-alvo",
    featureZoneText: "Defina limites de frequência cardíaca e receba alertas simples ao mudar de zona.",
    featureHistoryTitle: "Histórico de treino",
    featureHistoryText: "Revise duração, BPM médio, máximo, mínimo e curvas registradas.",
    featureDataTitle: "Controle de dados",
    featureDataText: "Importe e exporte o histórico do KINETIC pelo seletor de arquivos do sistema.",
    privacyEyebrow: "Privacidade e aviso de saúde",
    privacyTitle: "Seu histórico fica no dispositivo por padrão.",
    privacyText: "KINETIC é apenas para fitness pessoal e revisão de treinos. Não é um dispositivo médico e não fornece diagnóstico, conselho de tratamento, monitoramento de emergência ou apoio clínico.",
    privacyPoint1: "A exportação e o compartilhamento só ocorrem quando você escolhe.",
    privacyPoint2: "As opções de privacidade de anúncios estão disponíveis onde exigido.",
    privacyPoint3: "Saúde, permissões, privacidade e termos estão disponíveis nas Configurações.",
    downloadEyebrow: "Obtenha o KINETIC",
    downloadTitle: "Abra o link de download para Android.",
    downloadText: "Quando estiver disponível na sua região, use o link da Play Store abaixo.",
    footerPrivacy: "Privacidade",
    footerTerms: "Termos",
    footerSupport: "Suporte"
  },
  fr: {
    ...baseText,
    navFeatures: "Fonctions",
    navPrivacy: "Confidentialité",
    navDownload: "Télécharger",
    navSupport: "Assistance",
    languageLabel: "Langue",
    systemDefault: "Valeur système",
    eyebrow: "Entraînement cardio Bluetooth",
    heroTitle: "Bougez avec votre cœur.",
    heroText: "Connectez un appareil BLE compatible, suivez vos BPM en direct, enregistrez vos séances et relisez vos efforts clairement.",
    downloadButton: "Télécharger pour Android",
    learnMore: "Voir les fonctions",
    statLive: "Direct",
    statLiveText: "Affichage BPM",
    statBle: "BLE",
    statBleText: "Connexion et diffusion",
    statData: "Sur l'appareil",
    statDataText: "Historique sur l'appareil",
    previewLive: "En direct",
    previewConnected: "Connecté",
    previewUnit: "BPM",
    previewBelow: "Bas",
    previewInZone: "Dans la cible",
    previewAbove: "Élevé",
    previewDuration: "Durée",
    previewAvg: "FC moy.",
    previewMax: "FC max",
    noteTitle: "Mode longue batterie",
    noteText: "Conçu pour les longues séances en extérieur.",
    featuresEyebrow: "Entraînement clair",
    featuresTitle: "Tout le nécessaire pendant et après une séance.",
    featureLiveTitle: "Suivi en temps réel",
    featureLiveText: "Affichez la fréquence cardiaque d'appareils Bluetooth compatibles par connexion ou diffusion.",
    featureZoneTitle: "Zones cibles",
    featureZoneText: "Définissez vos limites cardiaques et recevez une alerte simple lors d'un changement de zone.",
    featureHistoryTitle: "Historique sportif",
    featureHistoryText: "Consultez durée, BPM moyen, maximum, minimum et courbes enregistrées.",
    featureDataTitle: "Contrôle des données",
    featureDataText: "Importez et exportez l'historique KINETIC via le sélecteur de fichiers système.",
    privacyEyebrow: "Confidentialité et santé",
    privacyTitle: "Votre historique reste sur votre appareil par défaut.",
    privacyText: "KINETIC sert uniquement au fitness personnel et à la revue d'entraînement. Ce n'est pas un dispositif médical et il ne fournit ni diagnostic, ni conseil de traitement, ni surveillance d'urgence, ni aide clinique.",
    privacyPoint1: "L'export et le partage se font uniquement à votre demande.",
    privacyPoint2: "Les choix de confidentialité publicitaire sont disponibles si nécessaire.",
    privacyPoint3: "Santé, autorisations, confidentialité et conditions sont disponibles dans Paramètres.",
    downloadEyebrow: "Obtenir KINETIC",
    downloadTitle: "Ouvrez le lien de téléchargement Android.",
    downloadText: "Une fois disponible dans votre région, utilisez le lien Play Store ci-dessous.",
    footerPrivacy: "Confidentialité",
    footerTerms: "Conditions",
    footerSupport: "Assistance"
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
  if (canvas) drawQr(canvas, DOWNLOAD_URL);
}

function gfMul(a, b) {
  let product = 0;
  for (let i = 0; i < 8; i += 1) {
    if (b & 1) product ^= a;
    const high = a & 0x80;
    a = (a << 1) & 0xff;
    if (high) a ^= 0x1d;
    b >>= 1;
  }
  return product;
}

function reedSolomon(data, ecCount) {
  let generator = [1];
  let root = 1;
  for (let i = 0; i < ecCount; i += 1) {
    const next = Array(generator.length + 1).fill(0);
    generator.forEach((coefficient, index) => {
      next[index] ^= gfMul(coefficient, root);
      next[index + 1] ^= coefficient;
    });
    generator = next;
    root = gfMul(root, 2);
  }
  const remainder = data.concat(Array(ecCount).fill(0));
  for (let i = 0; i < data.length; i += 1) {
    const factor = remainder[i];
    if (factor === 0) continue;
    for (let j = 0; j < generator.length; j += 1) {
      remainder[i + j] ^= gfMul(generator[j], factor);
    }
  }
  return remainder.slice(data.length);
}

function appendBits(bits, value, length) {
  for (let i = length - 1; i >= 0; i -= 1) bits.push((value >> i) & 1);
}

function encodeQrData(text) {
  const bytes = Array.from(new TextEncoder().encode(text));
  const bits = [];
  appendBits(bits, 0x4, 4);
  appendBits(bits, bytes.length, 8);
  bytes.forEach((value) => appendBits(bits, value, 8));
  appendBits(bits, 0, Math.min(4, 640 - bits.length));
  while (bits.length % 8) bits.push(0);
  const data = [];
  for (let i = 0; i < bits.length / 8; i += 1) {
    let value = 0;
    for (let j = 0; j < 8; j += 1) value = (value << 1) | (bits[i * 8 + j] || 0);
    data.push(value);
  }
  for (let pad = 0; data.length < 80; pad += 1) data.push(pad % 2 ? 0x11 : 0xec);
  return data.concat(reedSolomon(data, 20));
}

function qrFormatBits(ecLevel, mask) {
  const data = (ecLevel << 3) | mask;
  let value = data << 10;
  for (let i = 14; i >= 10; i -= 1) {
    if ((value >> i) & 1) value ^= 0x537 << (i - 10);
  }
  return (((data << 10) | value) ^ 0x5412) & 0x7fff;
}

function createQrMatrix(text) {
  const size = 33;
  const matrix = Array.from({ length: size }, () => Array(size).fill(false));
  const reserved = Array.from({ length: size }, () => Array(size).fill(false));
  const set = (x, y, value, reserve = true) => {
    if (x < 0 || y < 0 || x >= size || y >= size) return;
    matrix[y][x] = value;
    if (reserve) reserved[y][x] = true;
  };
  const finder = (x, y) => {
    for (let dy = -1; dy <= 7; dy += 1) {
      for (let dx = -1; dx <= 7; dx += 1) {
        const inside = dx >= 0 && dx <= 6 && dy >= 0 && dy <= 6;
        const dark = inside && (dx === 0 || dx === 6 || dy === 0 || dy === 6 || (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4));
        set(x + dx, y + dy, dark);
      }
    }
  };
  finder(0, 0);
  finder(size - 7, 0);
  finder(0, size - 7);
  for (let i = 8; i < size - 8; i += 1) {
    set(i, 6, i % 2 === 0);
    set(6, i, i % 2 === 0);
  }
  for (let dy = -2; dy <= 2; dy += 1) {
    for (let dx = -2; dx <= 2; dx += 1) {
      set(26 + dx, 26 + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
    }
  }
  set(8, size - 8, true);
  for (let i = 0; i < 9; i += 1) {
    if (i !== 6) {
      reserved[8][i] = true;
      reserved[i][8] = true;
    }
  }
  for (let i = 0; i < 8; i += 1) {
    reserved[8][size - 1 - i] = true;
    reserved[size - 1 - i][8] = true;
  }
  const dataBits = [];
  encodeQrData(text).forEach((byte) => appendBits(dataBits, byte, 8));
  let bitIndex = 0;
  let upward = true;
  for (let x = size - 1; x > 0; x -= 2) {
    if (x === 6) x -= 1;
    for (let i = 0; i < size; i += 1) {
      const y = upward ? size - 1 - i : i;
      for (let dx = 0; dx < 2; dx += 1) {
        const xx = x - dx;
        if (!reserved[y][xx]) {
          const mask = (xx + y) % 2 === 0;
          set(xx, y, Boolean(dataBits[bitIndex]) !== mask, false);
          bitIndex += 1;
        }
      }
    }
    upward = !upward;
  }
  const format = qrFormatBits(1, 0);
  const first = [[8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 7], [8, 8], [7, 8], [5, 8], [4, 8], [3, 8], [2, 8], [1, 8], [0, 8]];
  const second = [[size - 1, 8], [size - 2, 8], [size - 3, 8], [size - 4, 8], [size - 5, 8], [size - 6, 8], [size - 7, 8], [8, size - 8], [8, size - 7], [8, size - 6], [8, size - 5], [8, size - 4], [8, size - 3], [8, size - 2], [8, size - 1]];
  first.forEach(([x, y], i) => set(x, y, Boolean((format >> i) & 1)));
  second.forEach(([x, y], i) => set(x, y, Boolean((format >> i) & 1)));
  return matrix;
}

function drawQr(canvas, text) {
  const matrix = createQrMatrix(text);
  const ctx = canvas.getContext("2d");
  const quiet = 4;
  const modules = matrix.length + quiet * 2;
  const scale = Math.floor(canvas.width / modules);
  const offset = Math.floor((canvas.width - modules * scale) / 2);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#17212B";
  matrix.forEach((row, y) => {
    row.forEach((dark, x) => {
      if (dark) ctx.fillRect(offset + (x + quiet) * scale, offset + (y + quiet) * scale, scale, scale);
    });
  });
}

initLanguage();
initDownload();
