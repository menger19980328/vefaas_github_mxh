// 通过 NPM dependencies 成功安装 NPM 包后此处可引入使用
// 如安装 linq 包后就可以引入并使用这个包
// const linq = require("linq");

/**
 * @param {Params}  params     自定义参数, 包含 month 字段，值为1到12之间的整数
 * @param {Context} context    上下文参数，可通过此参数下钻获取上下文变量信息等
 * @param {Logger}  logger     日志记录器
 *
 * @return 函数的返回数据, 包含 zodiacSign 字段，表示对应月份的星座名称
 */
module.exports = async function (params, context, logger) {
  // 日志功能
  logger.info(`${new Date()} 函数开始执行111`);

  const month = params.month;

  // 定义月份对应的星座数组
  const zodiacSigns = [
    "摩羯座", // 1月 - Capricorn: 务实、保守、有耐心，但有时也显得过于谨慎和不灵活。
    "水瓶座", // 2月 - Aquarius: 创新、独立、理想主义者，喜欢自由，但可能显得古怪和不切实际。
    "双鱼座", // 3月 - Pisces: 富有同情心、艺术天分，直觉敏锐，但有时可能过于敏感和缺乏现实感。
    "白羊座", // 4月 - Aries: 充满活力、勇敢、充满激情，但有时显得自我中心和冲动。
    "金牛座", // 5月 - Taurus: 冷静、可靠、务实，但有时过于顽固和不愿改变。
    "双子座", // 6月 - Gemini: 开朗、机智、善变，思维敏捷，但有时显得肤浅和容易分心。
    "巨蟹座", // 7月 - Cancer: 关心他人、富有感情、忠诚，但有时显得情绪化和过于敏感。
    "狮子座", // 8月 - Leo: 自信、高傲、大方，有很强的领导能力，但有时显得过于自负和专横。
    "处女座", // 9月 - Virgo: 注重细节、追求完美、务实，具有分析能力，但有时过于挑剔和保守。
    "天秤座", // 10月 - Libra: 和谐、公正、社交能力强，具有魅力和亲和力，但有时犹豫不决。
    "天蝎座", // 11月 - Scorpio: 神秘、独立、富有激情，忠诚坚定，但有时显得嫉妒和控制欲强。
    "射手座"  // 12月 - Sagittarius: 乐观、开朗、开放心胸，爱好自由和冒险，但有时显得不切实际和欠缺责任感。
  ];

  // 判断输入的月份是否合法
  if (month < 1 || month > 12) {
    throw new Error("月份参数无效，必须是1到12之间的整数");
  }

  // 根据月份索引获取对应的星座
  const zodiacSign = zodiacSigns[month - 1];

  // 返回对应月份的星座名称
  return {
    zodiacSign
  };
}