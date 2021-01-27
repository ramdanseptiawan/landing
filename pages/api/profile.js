// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
	res.statusCode = 200
	res.json({
		name: 'PT. Langgeng Cipta Solusi',
		description: 'PT Langgeng Cipta Solusi (LCS) is an Indonesian IT solution based company, established in 2020, located in Bandung, West Java, Indonesia. We develop an end to end integrated real time on-line solutions focusing in monitoring and creating an early warning system. Supported by competent and dedicated multidiscipline R&D team, enable us to continuously improving our products to the latest trends and innovations. Our objectives and motivations are always to create products that empower our customers to reach their goals as well as giving benefit to all stake holders.'
	})
}
