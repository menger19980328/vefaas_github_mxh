package gocli0109

import (
	"context"
	"fmt"
)

/*Params 函数入参定义
 * 结构体名称不支持自定义, 必须为 Params
 * 结构体属性支持自定义, 和 index.meta.json 中的 input 参数一一对应
 */
// 在 Params 结构体中添加 Month 字段
type Params struct {
	Month int `json:"month"` // 字段 Month 表示月份，范围是1到12
}

/*Result 函数出参定义
 * 结构体名称不支持自定义, 必须为 Result
 * 结构体属性支持自定义, 和 index.meta.json 中的 output 参数一一对应
 */
// 在 Result 结构体中添加 ZodiacSign 字段
type Result struct {
	ZodiacSign string `json:"zodiacSign"` // 对应月份的星座名称
}

// 根据给定的月份返回对应的星座名称
func getZodiacSign(month int) (string, error) {
	zodiacSigns := []string{
		"摩羯座", // 1月 - Capricorn
		"水瓶座", // 2月 - Aquarius
		"双鱼座", // 3月 - Pisces
		"白羊座", // 4月 - Aries
		"金牛座", // 5月 - Taurus
		"双子座", // 6月 - Gemini
		"巨蟹座", // 7月 - Cancer
		"狮子座", // 8月 - Leo
		"处女座", // 9月 - Virgo
		"天秤座", // 10月 - Libra
		"天蝎座", // 11月 - Scorpio
		"射手座", // 12月 - Sagittarius
	}

	if month < 1 || month > 12 {
		return "", fmt.Errorf("无效的月份: %v", month)
	}

	return zodiacSigns[month-1], nil
}

/*Handler 函数入口
 * 入口函数签名不支持自定义, 必须为 func(context.Context, *Params) (*Result, error)
 * @param ctx    请求上下文参数, 使用 server-sdk-go 需要链路透传该参数
 * @param params 请求参数
 */
func Handler(ctx context.Context, params *Params) (*Result, error) {
	// 获取星座名称
	zodiacSign, err := getZodiacSign(params.Month)
	if err != nil {
		return nil, err
	}

	return &Result{ZodiacSign: zodiacSign}, nil
}
