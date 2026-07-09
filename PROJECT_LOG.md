# 건식 포트폴리오 사이트 — 프로젝트 기록

> **다음 AI 세션 시작 시**: 이 파일을 첨부하거나 내용을 붙여넣으면 맥락이 이어집니다.

---

## 기본 정보

| 항목 | 내용 |
|---|---|
| **이름** | 신건식 |
| **이메일** | skyunpp@gmail.com |
| **전화** | 010-9649-5678 |
| **GitHub** | https://github.com/geonchicshin-rgb |
| **GitHub 저장소** | https://github.com/geonchicshin-rgb/- |
| **배포 URL (Netlify)** | https://cozy-sprinkles-f5852d.netlify.app |
| **로컬 실행** | `npm run dev` → http://localhost:3000 |
| **작업 폴더** | `C:\Users\신건식\Desktop\건식 포트폴리오 사이트` |

---

## 만들어진 것

**스크롤 스토리텔링 포트폴리오** — 스크롤을 내리면 이야기 안으로 들어가는 방식.

### 기술 스택
- Next.js 16 (App Router, 정적 내보내기 `output: "export"`)
- Tailwind CSS v4
- GSAP + ScrollTrigger (스크롤 애니메이션)
- Lenis (부드러운 관성 스크롤)
- Pretendard 폰트

### 사이트 구조 (스크롤 순서)

| 섹션 | 연출 효과 | 내용 |
|---|---|---|
| **Hero** | 포털 링 → 스크롤 시 줌인 | "스펙은 종이 위에, 실행은 화면 안에." |
| **About** | sticky + 문장 한 줄씩 밝아짐 | 자기소개 5문장 |
| **Works** | 프로젝트별 클립 리빌 + 패럴랙스 인덱스 | 프로젝트 3개 |
| **How I Work** | 스크롤 등장 애니메이션 | 4단계 프로세스 + AI 도구 |
| **Contact** | 배경 글로우 + 버튼 | 이메일·전화·GitHub |

### 실제 재료로 채워진 것

| 프로젝트 | 재료 | 상태 |
|---|---|---|
| **36.5도 (자체 개발 앱)** | 세로 영상 mp4 + 앱 스크린샷 | ✅ 완료 |
| **B2B 경유 재고 최적화** | PDF 발표자료 (수치 추출) | ✅ 완료 — PDF 다운로드 버튼 있음 |
| **AI 환승센터** | 발표 현장 사진 | ✅ 완료 |

---

## 파일 구조

```
건식 포트폴리오 사이트/
├── app/
│   ├── globals.css        # 전체 색상·폰트·그레인 효과
│   ├── layout.tsx         # Pretendard 폰트 로드, 메타데이터
│   └── page.tsx           # 섹션 조립 (순서 여기서 변경)
├── components/
│   ├── SmoothScroll.tsx   # Lenis 부드러운 스크롤 설정
│   ├── Nav.tsx            # 상단 네비게이션 (스크롤 시 반투명)
│   ├── Hero.tsx           # 1장: 포털 줌인
│   ├── Manifesto.tsx      # 2장: 문장 한 줄씩 밝아짐 (sticky 방식)
│   ├── Works.tsx          # 3장: 프로젝트 3개 씬
│   ├── Process.tsx        # 4장: 일하는 방식
│   └── Contact.tsx        # 5장: 연락처
├── data/
│   └── content.ts         # ⭐ 모든 문구·프로젝트 정보 여기서 수정
├── public/
│   └── media/
│       ├── app-365-demo.mp4          # 36.5도 앱 시연 영상
│       ├── app-365-screen.jpg        # 36.5도 스크린샷
│       ├── ai-hub-presentation.jpg   # AI 환승센터 발표 사진
│       └── b2b-diesel-inventory.pdf  # B2B 경유 발표자료
├── out/                   # 정적 빌드 결과물 (netlify drop용)
├── PROJECT_LOG.md         # 이 파일 (세션 기록)
└── README.md              # 수정 방법 가이드
```

---

## 콘텐츠 수정 방법

**`data/content.ts` 파일 하나만 수정하면 전체 반영됩니다.**

| 수정 항목 | 위치 |
|---|---|
| 이름·이메일·전화·GitHub | `profile` 블록 (맨 위) |
| About 스크롤 문장 | `manifesto.lines` 배열 |
| Hero 대제목 2줄 | `profile.heroLines` |
| 프로젝트 내용 | `projects` 배열 (3개) |
| HOW I WORK 카드 | `process.steps` |
| Contact 섹션 문구 | `contact` 블록 |

수정 후 배포 반영:
```bash
git add .
git commit -m "내용 수정"
git push
```
→ Netlify가 자동으로 재빌드·재배포 (약 1~2분 소요)

---

## [더미] — 아직 실제 내용으로 교체 안 된 것

- `36.5도` 앱 개발 기간, 실제 출시 여부, 스토어 링크
- `AI 환승센터` 담당 역할 세부 내용, 사용 기술 스택
- `HOW I WORK` → 실제 사용하는 AI 도구 목록 확인
- Netlify 배포 URL

---

## 작업 이력

| 날짜 | 작업 내용 |
|---|---|
| 2026-07-09 | 프로젝트 초기 구성, Next.js + GSAP + Lenis 설치 |
| 2026-07-09 | Hero·About·Works·Process·Contact 섹션 구현 |
| 2026-07-09 | 실제 재료 3종 투입 (영상·PDF·사진) |
| 2026-07-09 | 연락처 (이메일·전화·GitHub) 반영 |
| 2026-07-09 | About 스크롤 애니메이션 수정 (sticky 방식으로 안정화) |
| 2026-07-09 | GitHub 저장소 push, Netlify 배포 |

---

## 다음 세션에서 할 수 있는 것

- [x] Netlify URL 확인 및 기록 → https://cozy-sprinkles-f5852d.netlify.app
- [ ] [더미] 항목 실제 내용으로 교체
- [ ] 프로필 사진 추가 (About 또는 Hero 섹션)
- [ ] 커스텀 도메인 연결 (선택)
- [ ] SEO 메타태그 추가 (og:image 등)
- [ ] Google Analytics 연동 (방문자 통계)
