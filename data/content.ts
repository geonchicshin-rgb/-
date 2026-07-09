// ============================================================
// 포트폴리오 콘텐츠 데이터
// [더미] 표시가 있는 값은 실제 내용으로 교체하세요.
// 이 파일만 수정하면 사이트 전체 문구가 바뀝니다.
// ============================================================

export const profile = {
  name: "신건식",
  nameEn: "SHIN GEONSIK",
  role: "AI-Native Builder",
  email: "skyunpp@gmail.com",
  phone: "010-9649-5678",
  github: "https://github.com/geonchicshin-rgb",
  heroLines: ["스펙은 종이 위에,", "실행은 화면 안에."],
  heroSub:
    "AI와 함께 기획하고, 만들고, 완성하는 개발자 신건식의 포트폴리오입니다.",
  scrollCue: "스크롤해서 안으로 들어가기",
};

export const manifesto = {
  label: "ABOUT",
  lines: [
    "저는 AI를 활용하여 결과물을 만들어 내는 사람입니다.",
    "화려한 경력은 없지만, 완성물을 바탕으로 실전경험을 가지고 있습니다.",
    "문제를 정의하고, AI를 활용하여 세세하고, 정확하게 질문하여",
    "결과를 판단해서 끝까지 다듬습니다.",
    "그 결과물을 지금부터 보여드리겠습니다.",
  ],
};

export type ProjectMedia =
  | { type: "video"; src: string; poster?: string; portrait?: boolean }
  | { type: "phone"; src: string }
  | { type: "photo"; src: string }
  | { type: "stats"; items: { value: string; label: string }[] };

export interface Project {
  id: string;
  index: string;
  category: string;
  title: string;
  tagline: string;
  period: string;
  role: string;
  problem: string;
  action: string;
  result: string;
  stack: string[];
  media: ProjectMedia;
  extraMedia?: ProjectMedia;
  link?: { href: string; label: string };
}

export const projects: Project[] = [
  {
    id: "app-365",
    index: "01",
    category: "자체 개발 앱",
    title: "36.5도",
    tagline: "흔들려도 다시 돌아오는, 감정 온도 코칭 앱",
    // [더미] 실제 개발 기간으로 교체
    period: "2026",
    role: "기획 · 디자인 · 개발 · 출시 (1인)",
    problem:
      "습관 앱은 하루만 실패해도 기록이 끊기고, 사용자는 자책하며 이탈합니다. 저는 '완벽한 연속'이 아니라 '다시 돌아오는 연습'을 도와주는 앱이 필요하다고 생각했습니다.",
    action:
      "기획부터 UI, 개발, 출시 준비까지 전 과정을 AI와 페어로 진행했습니다. 사람의 체온 36.5°를 '오늘의 코칭 온도'라는 메타포로 옮기고, 선언 → 오늘의 약속 → 응원으로 이어지는 감정 중심 루프를 설계했습니다.",
    // [더미] 출시/다운로드 수 등 실제 성과가 생기면 교체
    result:
      "혼자서 아이디어를 동작하는 앱으로 완성했습니다. 아래 영상은 실제 구동 화면입니다.",
    // [더미] 실제 사용 스택으로 교체
    stack: ["모바일 앱", "AI 페어 프로그래밍", "UI/UX 직접 설계"],
    media: { type: "video", src: "/media/app-365-demo.mp4", portrait: true },
    extraMedia: { type: "phone", src: "/media/app-365-screen.jpg" },
  },
  {
    id: "b2b-diesel",
    index: "02",
    category: "팀 프로젝트 · AI 예측 모델",
    title: "B2B 경유 재고 최적화",
    tagline: "유가·환율·교통량을 학습해 발주 타이밍을 알려주는 웹서비스",
    period: "2026",
    role: "가격 예측 모델 개발 · 발표 (6인 팀)",
    problem:
      "경유 수요는 유류세 예고에 따른 사재기, 국제 유가의 1~2개월 지연 반영 때문에 단순 통계로는 예측이 불가능합니다. 재고를 잘못 잡으면 품절 또는 과잉 재고로 직결됩니다.",
    action:
      "XGBoost 기반 가격 예측 모델을 담당했습니다. 절대 수치 대신 전월 대비 변화율을 학습시켜 과적합을 해결하고, 국제 지표의 2개월 시차를 지연 변수로 설계했습니다. 결과는 React + Django 대시보드로 연동됩니다.",
    result:
      "가격 예측 오차율(MAPE) 3.2%, 수요 예측 7.06%를 달성했습니다. 에너지 물류 업계에서 10% 이내면 실무 적용 가능 수준입니다.",
    stack: ["XGBoost", "강화학습", "Python", "React", "Django"],
    media: {
      type: "stats",
      items: [
        { value: "3.2%", label: "가격 예측 오차율 (MAPE) — 담당 파트" },
        { value: "7.06%", label: "수요 예측 오차율 (MAPE)" },
        { value: "49%", label: "핵심 변수(3개월 이동평균) 중요도" },
        { value: "2개월", label: "국제 유가 지연 반영, 변수로 설계" },
      ],
    },
    link: { href: "/media/b2b-diesel-inventory.pdf", label: "발표 자료 PDF 보기" },
  },
  {
    id: "ai-hub",
    index: "03",
    category: "팀 프로젝트 · AI 플랫폼",
    title: "AI 환승센터",
    tagline: "나에게 딱 맞는 AI툴로 환승하세요 — Freemium AI 추천 플랫폼",
    period: "2026.03 — 2026.05",
    role: "AI+X 프로젝트 · 4인 팀",
    problem:
      "AI 도구는 쏟아지는데, 정작 '내 작업에 맞는 도구'를 찾는 일이 가장 어렵습니다. 대부분 유료 결제 후에야 안 맞는다는 걸 알게 됩니다.",
    // [더미] 담당 역할·구현 내용을 구체적으로 교체
    action:
      "사용자의 목적에 맞는 AI 도구를 찾아 갈아탈 수 있게 돕는 Freemium 플랫폼을 기획·구축했습니다. 도구 탐색부터 추천까지의 여정을 '환승'이라는 컨셉으로 풀었습니다.",
    // [더미] 실제 결과(발표 평가, 데모 링크 등)로 교체
    result:
      "3개월간 팀으로 완주하고 최종 발표까지 마쳤습니다. 사진은 실제 발표 현장입니다.",
    // [더미] 실제 사용 스택으로 교체
    stack: ["서비스 기획", "AI 도구 리서치", "팀 협업"],
    media: { type: "photo", src: "/media/ai-hub-presentation.jpg" },
  },
];

export const process = {
  label: "HOW I WORK",
  title: "AI 시대의 개발은,\n질문하는 사람이 완성합니다.",
  steps: [
    {
      no: "01",
      title: "문제 정의",
      desc: "무엇을 왜 만드는지부터 씁니다. AI는 모호한 질문에 모호하게 답하니까요.",
    },
    {
      no: "02",
      title: "AI와 프로토타이핑",
      desc: "AI 페어와 함께 가장 빠른 동작 버전을 만듭니다. 완벽보다 확인이 먼저입니다.",
    },
    {
      no: "03",
      title: "판단과 다듬기",
      desc: "AI의 결과물을 그대로 쓰지 않습니다. 검증하고, 고치고, 책임집니다.",
    },
    {
      no: "04",
      title: "완성과 회고",
      desc: "배포까지가 개발입니다. 끝낸 뒤에는 다음 프로젝트를 위한 기록을 남깁니다.",
    },
  ],
  // [더미] 실제로 사용하는 도구 목록으로 교체
  tools: ["Claude Code", "Cursor", "ChatGPT", "Gemini", "GitHub", "Vercel"],
};

export const contact = {
  label: "CONTACT",
  title: "함께 만들 준비가\n되어 있습니다.",
  desc: "지금도 다음 결과물을 만드는 중입니다. 편하게 연락 주세요.",
};
