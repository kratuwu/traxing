import UnderDevelopment from '../components/UnderDevelopment';

export default function SummaryPage() {
    return (<div>
        <UnderDevelopment />
        <div className="flex justify-between m-[100px]">
            <div>ภาพรวม</div>
            <div>ภูมิภาค</div>
            <div>จังหวัด</div>
            <div>อำเภอ</div>
        </div>
    </div>);
}