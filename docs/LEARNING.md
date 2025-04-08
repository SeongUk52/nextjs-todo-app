# Next.js 학습 노트

## 1. Next.js 개요

Next.js는 React 기반의 풀스택 웹 프레임워크로, 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG), API 라우트 등 다양한 기능을 제공합니다.

### 주요 특징

- **하이브리드 렌더링**: 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG) 지원
- **자동 코드 분할**: 페이지 단위의 자동 코드 스플리팅
- **파일 기반 라우팅**: 파일 시스템 기반의 직관적인 라우팅
- **API 라우트**: 백엔드 API 엔드포인트 쉽게 생성
- **이미지 최적화**: 내장된 이미지 최적화 기능

## 2. App Router vs Pages Router

Next.js 13부터 App Router가 도입되었으며, 기존의 Pages Router와 함께 사용할 수 있습니다.

### App Router 특징

- **서버 컴포넌트**: React 서버 컴포넌트 지원
- **중첩 라우팅**: 폴더 기반의 중첩 라우팅 구조
- **레이아웃**: 중첩된 레이아웃 시스템
- **로딩 UI**: Suspense를 이용한 로딩 상태 관리
- **스트리밍**: 서버에서 UI를 점진적으로 스트리밍

### Pages Router 특징

- **파일 기반 라우팅**: `/pages` 디렉토리 기반 라우팅
- **API 라우트**: `/pages/api` 하위에 API 엔드포인트 생성
- **getServerSideProps/getStaticProps**: 데이터 페칭 방법

## 3. 주요 개념

### 서버 컴포넌트 vs 클라이언트 컴포넌트

```typescript
// 서버 컴포넌트 (기본값)
export default function ServerComponent() {
  return <div>서버에서 렌더링</div>;
}

// 클라이언트 컴포넌트
"use client";

export default function ClientComponent() {
  return <div>클라이언트에서 렌더링</div>;
}
```

### 데이터 페칭

```typescript
// 서버 컴포넌트에서의 데이터 페칭
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <div>{data.title}</div>;
}
```

### 라우팅

App Router에서는 폴더 구조가 URL 경로를 정의합니다:

- `app/page.tsx` → `/`
- `app/about/page.tsx` → `/about`
- `app/blog/[slug]/page.tsx` → `/blog/:slug`

### 레이아웃

```typescript
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
```

## 4. 프로젝트에서 배운 내용

### 1. 동적 컴포넌트 임포트

Next.js에서는 `dynamic`을 사용하여 컴포넌트를 동적으로 임포트할 수 있습니다. 이는 클라이언트 사이드 렌더링이 필요한 컴포넌트(예: localStorage 사용)에 유용합니다.

```typescript
import dynamic from 'next/dynamic';

const ClientComponent = dynamic(() => import('./ClientComponent'), {
  ssr: false, // 서버에서 렌더링하지 않음
});
```

### 2. 타입스크립트 활용

Next.js는 TypeScript와 잘 통합되어 있어 타입 안전성을 갖춘 애플리케이션을 개발할 수 있습니다:

```typescript
// 인터페이스 정의
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

// 타입이 지정된 상태와 props
const [todos, setTodos] = useState<Todo[]>([]);

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
}
```

### 3. 로컬 스토리지 사용

클라이언트 컴포넌트에서는 브라우저 API(예: localStorage)를 사용할 수 있습니다:

```typescript
// 데이터 저장
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);

// 데이터 로드
useEffect(() => {
  const storedTodos = localStorage.getItem('todos');
  if (storedTodos) {
    setTodos(JSON.parse(storedTodos));
  }
}, []);
```

### 4. Tailwind CSS 활용

Next.js는 Tailwind CSS와 쉽게 통합됩니다:

```tsx
<div className="max-w-md p-4 mx-auto">
  <h1 className="my-4 text-2xl font-bold text-center">투두 리스트</h1>
</div>
```

## 5. 배포 과정

1. GitHub 저장소 생성 및 코드 푸시
2. Vercel 계정 생성 및 로그인
3. Vercel에서 GitHub 저장소 가져오기
4. 배포 설정 구성 및 배포 시작
5. 자동 배포 설정 (GitHub 저장소에 변경사항 푸시 시 자동 배포)

## 6. 향후 개선 사항

1. **서버 컴포넌트 활용**: 서버 컴포넌트를 이용한 데이터 페칭
2. **데이터베이스 연동**: 로컬 스토리지 대신 실제 데이터베이스 사용
3. **인증 시스템 구현**: 사용자별 투두 리스트 관리
4. **테스트 코드 작성**: 단위 테스트, 통합 테스트 추가
5. **성능 최적화**: 컴포넌트 메모이제이션, 이미지 최적화

## 7. 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [React 공식 문서](https://reactjs.org/docs)
- [TypeScript 공식 문서](https://www.typescriptlang.org/docs)
- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs) 