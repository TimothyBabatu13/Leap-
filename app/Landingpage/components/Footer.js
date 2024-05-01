
import logo from "@/public/logo.svg";
import Image from "next/image";
const Footer = () => {
    const data = [
        {
            title: "For Talents",
            data: [
                "Global Invoicing",
                "Tax Assistance",
                "Banking",
                "Virtual Accounts"
            ]
        },
        {
            title: "For Businesses",
            data: [
                "AOR",
                "EQR",
                "Payments",
                "Talents",
                "Payroll",
                "Employees"
            ]
        },
        {
            title: "Tools",
            data: [
                "Invoice Generator",
                "Resume Builder",
                "NDAs",
                "Services"
            ]
        },
        {
            title: "Resources",
            data: [
                "Pricing",
                "About",
                "Blog",
                "Support",
                "Contact Us",
                "Careers",
                "Press Kit"
            ]
        },
        {
            title: "Collaborate",
            data: [
                "Partners Program",
                "Partners",
                "Affliates",
                "HR Partner",
                "Community"
            ]
        }
    ]
  return (
    <footer className=" grid grid-cols-6 gap-[20px]">
        <Image src={logo} alt="logo"/>
        {
            data.map((item, id)=>(
                <div key={id}>
                    <h1 
                        className={`text-sixteen font-fiveHundrend text-footerMain mb-[20px]`}
                    >
                        {item.title}
                    </h1>
                    <ul>
                        {item.data.map(item=>(
                            <li 
                                key={`${id}${item}`}
                                className={`text-footerPrimary text-sixteen font-fiveHundrend mb-[15px]`}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))
        }
    </footer>
  )
}

export default Footer