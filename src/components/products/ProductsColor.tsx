export default function ProductsColor() {
  const Color = [
    {
      model: "M-001",
      color: "#F5F8FD",
    },
    {
      model: "M-002",
      color: "#F9F6CD",
    },
    {
      model: "M-003",
      color: "#F8E9E4",
    },
    {
      model: "M-004",
      color: "#F8EDF1",
    },
    {
      model: "M-005",
      color: "#FEFEFE",
    },
    {
      model: "M-006",
      color: "#FFF9BD",
    },
    {
      model: "M-007",
      color: "#F5CFCF",
    },
    {
      model: "M-008",
      color: "#F5CBDF",
    },
    {
      model: "M-009",
      color: "#FCF7F4",
    },
    {
      model: "M-010",
      color: "#F7ECB6",
    },
    {
      model: "M-011",
      color: "#D5B3BB",
    },
    {
      model: "M-012",
      color: "#F1C2E2",
    },
  ];

  return (
    <section className="mt-[100px]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">
          {Color.map((item, index) => {
            return (
              <div key={index} className="rounded-fn">
                <div
                  className={`h-[140px] border border-[#DDDDDD] inset-shadow-[0,0,15px,black/20]`}
                  style={{ backgroundColor: item.color }}
                ></div>
                <p className="text-center text-[20px] py-3 font-medium">
                  {item.model}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
