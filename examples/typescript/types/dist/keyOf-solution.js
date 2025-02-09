"use strict";
const scanErrors = [
    {
        numberOfVulnerabilities: 1,
        packages: [{ name: "fetch", version: "1.2.3", cve: "2024-1554-223" }],
        priorities: ["high", "low"],
        id: "id_1",
        userScannerId: "2024_12_12",
    },
    {
        numberOfVulnerabilities: 1,
        packages: [{ name: "axios", version: "1.2.3", cve: "2024-1124-223" }],
        priorities: ["high", "low"],
        id: "Id_2",
        userScannerId: "2024_12_12",
    },
];
// type ScanPickExample = Pick<ScanResult, "id" | "numberOfVulnerabilities">;
filterScans(scanErrors, "numberOfVulnerabilities", "aaa");
function filterScans(data, key, value) {
    if (!Array.isArray(data))
        return;
    if (typeof value === "string") {
        return data.filter((item) => item[key].toLowerCase() === value.toLowerCase());
    }
    else {
        return data.filter((item) => item[key] === value);
    }
}
