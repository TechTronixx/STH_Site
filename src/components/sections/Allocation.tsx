import { motion } from "framer-motion";

export const Allocation = () => {
  const tokenomics = [
    { category: "Public Sale", percentage: 40, color: "bg-blue-500" },
    { category: "Liquidity Pool", percentage: 30, color: "bg-green-500" },
    { category: "Team & Development", percentage: 15, color: "bg-purple-500" },
    { category: "Marketing", percentage: 10, color: "bg-yellow-500" },
    { category: "Community Rewards", percentage: 5, color: "bg-pink-500" },
  ];

  return (
    <section id="allocation" className="py-20 bg-black blur-sm">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white">
            Token <span className="text-goldAccent">Allocation</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-goldAccent"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            Total Supply: 1,000,000,000 STH
          </p>
        </motion.div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {tokenomics.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between mb-2">
                  <span className="text-white">{item.category}</span>
                  <span className="text-goldAccent">{item.percentage}%</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-2.5">
                  <div
                    className={`${item.color} h-2.5 rounded-full`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-lg bg-zinc-900"
          >
            <h3 className="mb-4 text-2xl font-bold text-white">Key Features</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 text-goldAccent">•</span>
                feat 1
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-goldAccent">•</span>
                feat 2
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-goldAccent">•</span>
                feat 3
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-goldAccent">•</span>
                feat 4
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
