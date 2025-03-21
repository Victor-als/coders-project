"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Menu() {
	const path = usePathname()

	return (
		<nav className="flex gap-6">
			<MenuItem href="/" selected={path === "/"}>
				Início
			</MenuItem>
			<MenuItem href="/project/1" selected={path.startsWith("/project")}>
				Projetos
			</MenuItem>
			<MenuItem
				href="https://api.whatsapp.com/send/?phone=5585987718085&text&type=phone_number"
				selected={false}
				newTab={true}
			>
				Contato
			</MenuItem>
		</nav>
	)
}

function MenuItem(props: {
	href: string
	children: React.ReactNode
	selected: boolean
	newTab?: boolean
}) {
	return (
		<Link href={props.href} target={props.newTab ? "_blank" : "_self"}>
			<span
				className={`
          flex items-center gap-2 text-md border-red-600 hover:text-white
          ${props.selected ? "border-b-2 text-white" : "text-zinc-400"}    
        `}
			>
				{props.children}
			</span>
		</Link>
	)
}
