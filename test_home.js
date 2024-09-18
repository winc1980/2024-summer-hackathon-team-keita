// document.getElementById("mbtiForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     // 質問の値を取得
//     const q1 = parseInt(document.querySelector('input[name="q1"]:checked').value);
//     const q2 = parseInt(document.querySelector('input[name="q2"]:checked').value);
//     const q3 = parseInt(document.querySelector('input[name="q3"]:checked').value);
//     const q4 = parseInt(document.querySelector('input[name="q4"]:checked').value);

//     // すべての質問が回答されているか確認
//     if (isNaN(q1) || isNaN(q2) || isNaN(q3) || isNaN(q4)) {
//         alert("すべての質問に回答してください。");
//         return;
//     }

//     // 各質問のスコアに基づいてタイプを決定
//     let type = "";

//     // 外向性（E）/内向性（I）
//     type += (q1 >= 3) ? "E" : "I";

//     // 直感（N）/感覚（S）
//     type += (q2 >= 3) ? "N" : "S";

//     // 思考（T）/感情（F）
//     type += (q3 >= 3) ? "T" : "F";

//     // 判断（J）/柔軟性（P）
//     type += (q4 >= 3) ? "J" : "P";

//     // 結果ページに遷移
//     switch(type) {
//         case "ENTJ":
//             window.location.href = "shindan_home.html";
//             break;
//         // 他のMBTIタイプに応じたページを追加
//         case "INTJ":
//             window.location.href = "intj_result.html";
//             break;
//         case "ENFP":
//             window.location.href = "enfp_result.html";
//             break;
//         // 必要に応じて他のタイプも追加
//         default:
//             alert("診断結果が不明です。");
//             break;
//     }
// });

// 2409180933

// document.querySelectorAll(".circle").forEach((circle) => {
//   circle.addEventListener("click", () => {
//     const value = parseInt(circle.getAttribute("data-value"));

//     document.querySelectorAll(".circle").forEach((c) => {
//       c.classList.remove("selected-mint", "selected-purple");
//     });

//     if (value <= 2) {
//       circle.classList.add("selected-mint");
//     } else if (value >= 4) {
//       circle.classList.add("selected-purple");
//     }

//     alert(`選択した値は: ${value}`);
//   });
// });

// 2409180933 end

// 2409181347
// 選択状態を保存するオブジェクト
const answers = {};

// 各円をクリックして選択したときの処理
document
  .querySelectorAll(".circle1, .circle2, .circle3, .circle4, .circle5")
  .forEach((circle) => {
    circle.addEventListener("click", () => {
      const value = parseInt(circle.getAttribute("data-value"));
      const questionId = circle.getAttribute("data-question-id");

      // 該当する質問の円だけをリセット
      document
        .querySelectorAll(`.circle[data-question-id="${questionId}"]`)
        .forEach((c) => {
          c.classList.remove(
            "selected-mint",
            "selected-purple",
            "selected-gray"
          );
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

      // デバッグ用: 選択された値を表示
      console.log(`質問ID: ${questionId}, 選択した値: ${value}`);
    });
  });

// ここでanswersオブジェクトには全ての質問に対する回答が保存されます

// 2409181347 end
