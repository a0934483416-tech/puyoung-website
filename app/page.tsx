import dynamic from 'next/dynamic'

const CompanyHomepageTech = dynamic(() => import('../components/CompanyHomepageTech'), { ssr: false })

export default function Page() {
  return <CompanyHomepageTech />
}
