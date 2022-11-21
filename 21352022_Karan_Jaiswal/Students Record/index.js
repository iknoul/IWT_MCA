const { Client } = require("cassandra-driver");

async function run(register_no = 0) {
	const client = new Client({
		cloud: {
			secureConnectBundle: "connection\\secure-connect-iwtl.zip",
		},
		credentials: {
			username: "aDIeOtcAviOuKOoAXGmWbPHQ",
			password:
				"TqtRc-FKibZl20U7zIpCH2Tcg3DzeOCa0T3Jkvm1qX4yiagi.AF6-mZ8KYoSQCav5O+w+3gdb3+LGaGMZiPdG7lS.TvUfF.UOySG3DT6UedQxruuT3ywD+I8PQa93az3",
		},
	});

	await client.connect();

	// Execute a query
	const query = register_no === 0 ? `SELECT * FROM csca514.students;` : `SELECT * FROM csca514.students WHERE register_no = ${register_no}`;
	const rows = await client.execute(query);
	for (const row of rows) {
		console.log("[" +row["register_no"] + "], [" + row["name"] + "], [" + row["i_email"] + "], [" + row["mobile"] + "], [" + row["p_email"] + "]");
	}

	await client.shutdown();
}

// Run the async function

run();
