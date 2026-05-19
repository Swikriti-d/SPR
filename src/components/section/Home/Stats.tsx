import Container from "../../common/Container";

const stats = [
  {
    number: "12M+",
    label: "Funds Allocated",
    highlight: false,
  },
  {
    number: "45+",
    label: "Active Projects",
    highlight: true,
  },
  {
    number: "850K",
    label: "Lives Impacted",
    highlight: false,
  },
  {
    number: "100%",
    label: "Audit Transparency",
    highlight: false,
  },
]

const Stats = () => {
  return (
    <section className="relative z-20 -mt-20">
      
      {/* Floating Card */}
      <Container>
      <div className="grid transform grid-cols-2 gap-3 rounded-lg bg-white p-4 shadow-2xl -translate-y-2 sm:grid-cols-3 sm:gap-4 sm:p-6 md:grid-cols-4 md:gap-6 md:p-10">

        {stats.map((item, index) => (
          <div key={index} className="text-center flex flex-col items-center justify-center gap-2">
            
            <h2 className={`text-3xl md:text-4xl font-extrabold ${ item.highlight ? "text-red-600" : "text-gray-900" }`} >
              {item.number}
            </h2>

            <p className="text-gray-600 mt-2 text-sm md:text-base font-bold">
              {item.label}
            </p>
          </div>
        ))}

      </div>
      </Container>
    </section>
  )
}

export default Stats