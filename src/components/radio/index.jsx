
import MainButton from "./MainButton"


const sampleData = [
    {
        question:
            "DATA PRACTICES - Which of the following best describes the data governance of your organization, or the area you oversee?",
        options: [
            "There is no clearly defined policies, roles or processes for data governance.",
            "Data governance policies and practices are implemented in silos and are reactive in nature.",
            "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
            "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
        ],
    },
    {
        question:
            "PROCESS PRACTICES - Which of the following best describes the process of generating insights from data using analytics in your organization, or the area you oversee?",
        options: [
            "There is no clearly defined policies, roles or processes for data governance.",
            "Data governance policies and practices are implemented in silos and are reactive in nature.",
            "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
            "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
        ],
    },
    {
        question:
            "PROCESS PRACTICES - Which of the following best describes the management of the process of generating insights from data using analytics in your organization, or the area you oversee? ",
        options: [
            "There is no clearly defined policies, roles or processes for data governance.",
            "Data governance policies and practices are implemented in silos and are reactive in nature.",
            "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
            "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
        ],
    },
    {
        question:
            "PEOPLE (WORKFORCE) PRACTICES - Which of the following best describes the data management roles and skills of your organization, or the area you oversee?",
        options: [
            "There is no clearly defined policies, roles or processes for data governance.",
            "Data governance policies and practices are implemented in silos and are reactive in nature.",
            "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
            "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
        ],
    },
    {
        question:
            "PEOPLE (WORKFORCE) PRACTICES - Which of the following best describes the data management roles and skills of your organization, or the area you oversee?",
        options: [
            "There is no clearly defined policies, roles or processes for data governance.",
            "Data governance policies and practices are implemented in silos and are reactive in nature.",
            "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
            "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
        ],
    },
    {
        question:
            "STRATEGY PRACTICES - Which of the following best describes the data and analytics strategy of your organization?",
        options: [
            "There is no clearly defined policies, roles or processes for data governance.",
            "Data governance policies and practices are implemented in silos and are reactive in nature.",
            "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
            "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
        ],
    },
    {
        question:
            "STRATEGY PRACTICES - What are your organization's top business priorities for 2021-2022?",
        options: [
            "There is no clearly defined policies, roles or processes for data governance.",
            "Data governance policies and practices are implemented in silos and are reactive in nature.",
            "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
            "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
        ],
    },
    {
        question:
            "RESULTS AND PERFORMANCE - Do you agree that your data and analytics practices, use cases and applications are important for your organization, or the area you oversee, to stay performant?",
        options: [
            "There is no clearly defined policies, roles or processes for data governance.",
            "Data governance policies and practices are implemented in silos and are reactive in nature.",
            "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
            "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
        ],
    },
    {
        question:
            "RESULTS AND PERFORMANCE - How do you assess your organization's performance in the past 12 months in the following categories, when compared with the peers in the same industry/geo? ",
        options: [
            "There is no clearly defined policies, roles or processes for data governance.",
            "Data governance policies and practices are implemented in silos and are reactive in nature.",
            "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
            "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
        ],
    },
    {
        question:
            "CHALLENGES - What are the most common challenges to making analytics work in your organization, or in the area you oversee? ",
        options: [
            "There is no clearly defined policies, roles or processes for data governance.",
            "Data governance policies and practices are implemented in silos and are reactive in nature.",
            "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
            "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
        ],
    },
];







const Survey = () => {

    return (
        <>
            
            <MainButton sampleData={sampleData} />

        </>
    )
}

export default Survey