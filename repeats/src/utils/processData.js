

export const processData = (data) => {
    const aggregatedData = {};

    data.results.forEach((entry) => {
        const memberDatabases = entry.metadata.member_databases;
        for (const db in memberDatabases) {
            if (!aggregatedData[db]) {
                aggregatedData[db] = 0;
            }
            aggregatedData[db] += Object.keys(memberDatabases[db]).length;
        }
    });

    return aggregatedData;
};