/**
 * ISO date-time \ Zulu time - наиболее используемый
 * формат даты\времени в javaScript. Выглядит он так:
 */
const dateTime = "2020-03-08T09:06:53.914Z";

/**
 * Важно, что месяц идет между годом и числом и короткие числа и месяцы
 * дополняются нолем.
 * Это дает нам возможность сравнивать эти даты просто как строки.
 * (вспоминаем, как сравниваются строки и почему "2" > "11").
 * Не пугайтесь, пока даты сравнивать не будем.
 *
 * Получить текущую дату в таком формате можно так:
 */

const now = new Date();
const nowISO = now.toISOString();
console.log(nowISO);

const seconds = function() {
  const today = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 2, 0, 0, 0);
  const difference = now - today;
  return Math.round(difference / 1000);
}
console.log(seconds());
