
import React from "react";

const categories = ["뉴스", "소셜 미디어", "쇼핑", "교육", "게임"];

const newsSites = [
  {
    name: "CNN",
    url: "https://www.cnn.com",
    likes: 9500,
    pros: ["빠른 속보 제공", "신뢰성 있는 보도"],
    cons: ["광고가 많음", "미국 중심의 시각"]
  },
  {
    name: "BBC",
    url: "https://www.bbc.com",
    likes: 9000,
    pros: ["전 세계 뉴스 커버", "신뢰도 높은 정보"],
    cons: ["UI가 복잡할 수 있음"]
  },
  {
    name: "뉴욕타임즈",
    url: "https://www.nytimes.com",
    likes: 8700,
    pros: ["심층 보도", "다양한 분야 다룸"],
    cons: ["구독 필요", "느린 로딩"]
  },
  {
    name: "조선일보",
    url: "https://www.chosun.com",
    likes: 8200,
    pros: ["한국 주요 뉴스 빠르게 업데이트"],
    cons: ["정치 성향 편향 논란"]
  },
  {
    name: "네이버 뉴스",
    url: "https://news.naver.com",
    likes: 8000,
    pros: ["종합 포털 뉴스", "댓글 기능 편리함"],
    cons: ["가짜 뉴스 유입 가능성"]
  }
];

export default function HomePage() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📊 분야별 인기 웹사이트</h1>

      <h2 className="text-xl font-semibold mt-4 mb-2">분야 목록</h2>
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((cat) => (
          <span
            key={cat}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {cat}
          </span>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">📰 뉴스 분야</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {newsSites.map((site) => (
          <div
            key={site.name}
            className="border rounded-2xl p-4 shadow hover:shadow-lg transition"
          >
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-blue-600 hover:underline"
            >
              {site.name}
            </a>
            <p className="text-sm text-gray-500">👍 {site.likes.toLocaleString()} 좋아요</p>
            <div className="mt-2">
              <p className="font-semibold text-sm">✅ 장점:</p>
              <ul className="list-disc list-inside text-sm text-green-700">
                {site.pros.map((pro, idx) => (
                  <li key={idx}>{pro}</li>
                ))}
              </ul>
            </div>
            <div className="mt-2">
              <p className="font-semibold text-sm">⚠️ 단점:</p>
              <ul className="list-disc list-inside text-sm text-red-700">
                {site.cons.map((con, idx) => (
                  <li key={idx}>{con}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
