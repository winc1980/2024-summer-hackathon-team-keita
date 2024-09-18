// 2409181347

// const answers = {};

// const scores = {
//   adventurer: 0,
//   cultural_explorer: 0,
//   relaxation_seeker: 0,
//   gourmet_traveler: 0,
// };

// const questionTypeMap = {
//   1: "cultural_explorer",
//   2: "relaxation_seeker",
//   3: "gourmet_traveler",
//   4: "cultural_explorer",
//   5: "adventurer",
//   6: "gourmet_traveler",
//   7: "relaxation_seeker",
//   8: "adventurer",
//   9: "cultural_explorer",
//   10: "adventurer",
//   11: "relaxation_seeker",
//   12: "gourmet_traveler",
//   13: "adventurer",
//   14: "cultural_explorer",
// };

// document.querySelectorAll(".circle").forEach((circle) => {
//   circle.addEventListener("click", () => {
//     const value = parseInt(circle.getAttribute("data-value"));
//     const questionId = parseInt(circle.getAttribute("data-question-id"));

//     document
//       .querySelectorAll(`.circle[data-question-id="${questionId}"]`)
//       .forEach((c) => {
//         c.classList.remove("selected-mint", "selected-purple", "selected-gray");
//       });

//     answers[questionId] = value;

//     if (value === 1 || value === 2) {
//       circle.classList.add("selected-mint");
//     }

//     else if (value === 4 || value === 5) {
//       circle.classList.add("selected-purple");
//     } else {
//       circle.classList.add("selected-gray");
//     }

//     const type = questionTypeMap[questionId];

//     if (value <= 2) {
//       scores[type] += 1;
//     } else if (value >= 4) {
//       scores[type] += 2;
//     }

//     console.log(scores);
//   });
// });

// function showResult() {

//   const maxScore = Math.max(
//     scores.adventurer,
//     scores.cultural_explorer,
//     scores.relaxation_seeker,
//     scores.gourmet_traveler
//   );

//   let resultType = "";

//   if (scores.adventurer === maxScore) {
//     resultType = "冒険家型";
//     window.location.href = "tripanswer1.html";
//   } else if (scores.cultural_explorer === maxScore) {
//     resultType = "文化探究型";
//     window.location.href = "tripanswer2.html";
//   } else if (scores.relaxation_seeker === maxScore) {
//     resultType = "リラクゼーション型";
//     window.location.href = "tripanswer3.html";
//   } else if (scores.gourmet_traveler === maxScore) {
//     resultType = "グルメ探訪型";
//     window.location.href = "tripanswer4.html";
//   }
// }

// document.getElementById("diagnose-btn").addEventListener("click", showResult);

// 2409181347 end

// 2409181635

// 2409181347
// 選択状態を保存するオブジェクト
const answers = {};

// 各タイプのスコアを保存するオブジェクト
let scores = {
  adventurer: 0,
  cultural_explorer: 0,
  relaxation_seeker: 0,
  gourmet_traveler: 0,
};

// 質問IDごとのタイプ割り当て
const questionTypeMap = {
  1: "cultural_explorer", // Q1
  2: "relaxation_seeker", // Q2
  3: "gourmet_traveler", // Q3
  4: "cultural_explorer", // Q4
  5: "adventurer", // Q5
  6: "gourmet_traveler", // Q6
  7: "relaxation_seeker", // Q7
  8: "adventurer", // Q8
  9: "cultural_explorer", // Q9
  10: "adventurer", // Q10
  11: "relaxation_seeker", // Q11
  12: "gourmet_traveler", // Q12
  13: "adventurer", // Q13
  14: "cultural_explorer", // Q14
};

// 各円をクリックして選択したときの処理
document.querySelectorAll(".circle").forEach((circle) => {
  circle.addEventListener("click", () => {
    const value = parseInt(circle.getAttribute("data-value"));
    const questionId = parseInt(circle.getAttribute("data-question-id"));

    // 該当する質問の円だけをリセット
    document
      .querySelectorAll(`.circle[data-question-id="${questionId}"]`)
      .forEach((c) => {
        c.classList.remove("selected-mint", "selected-purple", "selected-gray");
      });

    // 選択された円の状態を保存
    answers[questionId] = value;

    // 左側（1, 2の値）の円はミントカラーに変更
    if (value === 1 || value === 2) {
      circle.classList.add("selected-mint");
    }
    // 右側（4, 5の値）の円はペールパープルに変更
    else if (value === 4 || value === 5) {
      circle.classList.add("selected-purple");
    } else {
      circle.classList.add("selected-gray");
    }

    // 質問IDに基づいて対応するタイプにスコアを一旦リセット
    scores[questionTypeMap[questionId]] = 0;

    // 質問IDに基づいて対応するタイプにスコアを加算
    const type = questionTypeMap[questionId];

    if (value == 2) {
      scores[type] += 1; // 同意する
    } else if (value == 1) {
      scores[type] += 2; // 強く同意する
    } else {
      scores[type] += 0;
    }

    console.log("Scores: ", scores); // デバッグ用：現在のスコアを表示
  });
});

// 診断結果を表示する関数

function showResult() {
  // まず、すべてのスコアが 0 であるか確認する
  const totalScore =
    scores.adventurer +
    scores.cultural_explorer +
    scores.relaxation_seeker +
    scores.gourmet_traveler;

  // もしスコアがすべて 0 であれば、アラートを表示して処理を中止
  if (totalScore === 0) {
    alert("質問に答えてください。");
    return; // ページ遷移を中止
  }
  scores.adventurer += 0.001;
  scores.cultural_explorer += 0.002;
  scores.relaxation_seeker += 0.003;
  scores.gourmet_traveler += 0.004;

  // スコアの中で最も高いものを探す
  const maxScore = Math.max(
    scores.adventurer,
    scores.cultural_explorer,
    scores.relaxation_seeker,
    scores.gourmet_traveler
  );

  let resultType = "";

  // 同点スコアが発生しにくくなるため、このロジックで一意の結果が得られる
  if (scores.adventurer === maxScore) {
    resultType = "冒険家型";
    window.location.href = "tripanswer1.html"; // 冒険家型のページに遷移
  } else if (scores.cultural_explorer === maxScore) {
    resultType = "文化探究型";
    window.location.href = "tripanswer2.html"; // 文化探究型のページに遷移
  } else if (scores.relaxation_seeker === maxScore) {
    resultType = "リラクゼーション型";
    window.location.href = "tripanswer3.html"; // リラクゼーション型のページに遷移
  } else if (scores.gourmet_traveler === maxScore) {
    resultType = "グルメ探訪型";
    window.location.href = "tripanswer4.html"; // グルメ探訪型のページに遷移
  }
}

// 「診断する」ボタンが押されたときに結果を表示
document.getElementById("diagnose-btn").addEventListener("click", showResult);

// 2409181635end

window.addEventListener("scroll", function () {
  const element = document.querySelector(".fade-in-element");
  const elementPosition = element.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (elementPosition < windowHeight) {
    element.classList.add("fade-in-active");
  }
});
