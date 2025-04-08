# Next.js 투두 앱

Next.js와 TypeScript를 이용한 간단한 투두 리스트 애플리케이션입니다.

## 📋 기능

- 투두 아이템 추가/삭제/수정
- 완료 상태 토글
- 로컬 스토리지를 이용한 데이터 저장
- 날짜별 투두 아이템 그룹화
- 반응형 디자인

## 🚀 기술 스택

- [Next.js 14](https://nextjs.org/) - React 프레임워크
- [TypeScript](https://www.typescriptlang.org/) - 타입 시스템
- [Tailwind CSS](https://tailwindcss.com/) - 스타일링
- [ESLint](https://eslint.org/) - 코드 린팅

## 📦 설치 및 실행

```bash
# 저장소 복제
git clone https://github.com/your-username/nextjs-todo-app.git
cd nextjs-todo-app

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 🔧 구조

```
nextjs-todo-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── TodoForm.tsx
│   │   │   ├── TodoItem.tsx
│   │   │   └── TodoList.tsx
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── ...
├── docs/
│   └── LEARNING.md
├── public/
├── .gitignore
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

## 📚 학습 내용

이 프로젝트를 통해 Next.js의 다양한 기능과 개념을 학습했습니다. 자세한 내용은 [학습 노트](./docs/LEARNING.md)를 참조하세요.

## 🌐 배포

이 프로젝트는 [Vercel](https://vercel.com)을 통해 배포되었습니다.

- 라이브 데모: [https://nextjs-todo-app-demo.vercel.app](https://nextjs-todo-app-demo.vercel.app) (예시 링크)

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 새 브랜치를 생성합니다: `git checkout -b my-new-feature`
3. 변경사항을 커밋합니다: `git commit -am 'Add some feature'`
4. 브랜치에 푸시합니다: `git push origin my-new-feature`
5. Pull Request를 제출합니다

## 📝 라이센스

MIT
