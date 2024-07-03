/* タブメニュー */
("use strict"); /* 厳格にエラーをチェック */
{
  /* ローカルスコープ */

  // DOM取得
  const tabMenus = document.querySelectorAll(".js-tab-item");
  // イベント付加
  tabMenus.forEach((tabMenu) => {
    tabMenu.addEventListener("click", tabSwitch);
  });

  // イベントの処理
  function tabSwitch(e) {
    // クリックされた要素のデータ属性を取得
    const tabTargetData = e.currentTarget.dataset.tab;
    // クリックされた要素の親要素と、その子要素を取得
    const tabList = e.currentTarget.closest(".js-tab");
    const tabItems = tabList.querySelectorAll(".js-tab-item");
    //クリックされたtabの親要素と同じ親要素を持つpanelを取得(兄弟要素)
    const tabPanelItems = tabList.querySelectorAll(".js-tab-content");

    // クリックされたtabの同階層のmenuとpanelのクラスを削除
    tabItems.forEach((tabItem) => {
      tabItem.classList.remove("is-active");
    });
    tabPanelItems.forEach((tabPanelItem) => {
      tabPanelItem.classList.remove("is-show");
    });

    // クリックされたmenu要素にis-activeクラスを付加
    e.currentTarget.classList.add("is-active");
    // クリックしたmenuのデータ属性と等しい値を持つパネルにis-showクラスを付加
    tabPanelItems.forEach((tabPanelItem) => {
      if (tabPanelItem.dataset.panel === tabTargetData) {
        tabPanelItem.classList.add("is-show");
      }
    });
  }
}
