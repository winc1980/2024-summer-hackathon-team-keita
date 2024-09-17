document.getElementById("mbtiForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // 質問の値を取得
    const q1 = parseInt(document.querySelector('input[name="q1"]:checked').value);
    const q2 = parseInt(document.querySelector('input[name="q2"]:checked').value);
    const q3 = parseInt(document.querySelector('input[name="q3"]:checked').value);
    const q4 = parseInt(document.querySelector('input[name="q4"]:checked').value);

    // すべての質問が回答されているか確認
    if (isNaN(q1) || isNaN(q2) || isNaN(q3) || isNaN(q4)) {
        alert("すべての質問に回答してください。");
        return;
    }

    // 各質問のスコアに基づいてタイプを決定
    let type = "";

    // 外向性（E）/内向性（I）
    type += (q1 >= 3) ? "E" : "I";

    // 直感（N）/感覚（S）
    type += (q2 >= 3) ? "N" : "S";

    // 思考（T）/感情（F）
    type += (q3 >= 3) ? "T" : "F";

    // 判断（J）/柔軟性（P）
    type += (q4 >= 3) ? "J" : "P";

    // 結果ページに遷移
    switch(type) {
        case "ENTJ":
            window.location.href = "shindan_home.html";
            break;
        // 他のMBTIタイプに応じたページを追加
        case "INTJ":
            window.location.href = "intj_result.html";
            break;
        case "ENFP":
            window.location.href = "enfp_result.html";
            break;
        // 必要に応じて他のタイプも追加
        default:
            alert("診断結果が不明です。");
            break;
    }
});
