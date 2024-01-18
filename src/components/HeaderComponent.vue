<script></script>

<template>
  <header
    class="tw-m-auto tw-w-[1220px] tw-pt-[10px] tw-pb-[15px] tw-h-[146px]"
  >
    <div class="tw-flex tw-justify-between tw-text-[#667080B2] tw-mb-[18px]">
      <div class="tw-flex">
        <div class="tw-text-[14px] tw-flex tw-cursor-pointer tw-mr-[40px]">
          <img src="../icons/Vector.svg" />
          <p class="tw-ml-[3px]">Москва</p>
        </div>
        <div class="tw-text-[13px]">8 (800) 511 77 30</div>
      </div>
      <div>
        <ul class="tw-flex tw-justify-between tw-w-[486px] tw-text-[13px]">
          <li>Оплата и доставка</li>
          <li>Возврат и обмен</li>
          <li>Подарочные сертификаты</li>
        </ul>
      </div>
    </div>
    <div class="tw-flex tw-justify-betwee">
      <div
        class="tw-items-center tw-text-[33px] tw-flex tw-font-black tw-text-[#31363F]"
      >
        Логотип
      </div>
      <div class="tw-bg-[#66708033] tw-w-[1px] tw-h-[36px] tw-mx-[20px]"></div>
      <div class="tw-flex">
        <ul
          class="tw-items-center tw-flex tw-justify-between tw-w-[347px] tw-text-[14px]"
        >
          <li><router-link to="/main">Каталог</router-link></li>
          <li>Магазины</li>
          <li>Акции</li>
          <li>Розыгрыш</li>
        </ul>
      </div>
      <div class="tw-flex">
        <input class="searchInput" placeholder="Поиск по каталогу" />
        <div
          class="tw-bg-[#66708033] tw-w-[1px] tw-h-[36px] tw-mx-[20px]"
        ></div>
        <div class="tw-flex">
          <ul class="tw-items-center tw-flex tw-justify-between tw-w-[104px]">
            <li><img src="../icons/1.svg" /></li>
            <li>
              <router-link to="/main/bascket"
                ><img src="../icons/2.svg"
              /></router-link>
            </li>
            <li><img src="../icons/3.svg" /></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="tw-mt-[25px]">
      <ul class="tw-text-[#667080cc] tw-text-[11px] tw-flex tw-justify-between">
        <li>ВСЕ АКЦИИ</li>
        <li>БРИЛЛИАНТЫ</li>
        <li>SALE</li>
        <li>ПОМОЛВОЧНЫЕ КОЛЬЦА</li>
        <li>КОЛЬЦА С ФИАНИТОМ</li>
        <li>ОБРУЧАЛЬНЫЕ КОЛЬЦА</li>
        <li>БЕЛОЕ ЗОЛОТО</li>
        <li>ПОДАРКИ К 8 МАРТА</li>
        <li>БЕЛОЕ ЗОЛОТО</li>
        <li>КОЛЬЦА С ФИАНИТОМ</li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
li {
  cursor: pointer;
}
.searchInput {
  font-size: 14px;
  width: 514px;
  height: 36px;
  background-color: #eef1f44d;
  border: 1px solid #eef1f4;
  border-radius: 5px;
  padding-left: 16px;
  margin-left: 30px;
}
</style>
