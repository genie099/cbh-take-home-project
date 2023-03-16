# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Breakdown Tickets.

        1. Ticket1: Allow facilities to save custom ids for agents 
            1) Description: Now, the system uses internal database ids to identify agents on reports generated
    			for facilities. This ticket involves adding the ability for facilities to save their own custom ids for
    			agents and using those ids when generating reports.
    		2) Time estimate: 8 hours
    		3) Acceptance Criteria:
    			- A new field "Facility Agent ID" is added to the Agents table in the database.
    			- The UI for Facilities is updated to allow them to set a Facility Agent ID for each Agent they work
    				with.
    			- When generating reports, the system uses the Facility Agent ID instead of the internal database
    				id for the Agent.
    		4) Implementation details
    			- create a migration to add the "Facility Agent ID" field to the Agents table.
    			- Update the UI to allow Facilities to enter custom ids for each Agent.
    			- Modify the report generation function to use the Facility Agent ID instead of the internal
    			  database id
    	2.	Ticket2: Validate Facility Agent IDs before generating reports.
    		1) Description: To ensure that the facility agent IDs entered by Facilities are valid, this ticket involves
    			adding validation before generating reports.
    		2) Time estimate: 5 hours
    		3) Acceptance Criteria:
    			- When a Facility enters a Facility Agent ID for an agent, the system checks if that ID is unique for
    				the Facility.
    			- If the ID is not unique, an error message is displayed and the Facility is prompted to enter a
    				different ID
    			- If the ID is unique, it is saved to the database.
    		4) Implementation details
    			- Add a validation function to check if a Facility Agent ID is unique for a Facility.
    			- Update the UI to display an error message if the ID is not unique
    			- Update the save function to save the ID to the database only if it's unique
    	3.	Ticket3: Update the report template to include Facility Agent IDs
    		1) Description: To reflect the new custom ids, this ticket involves updating the report template to
    			include the Facility Agent IDs.
    		2) Time estimate: 3 hours
    		3) Acceptance Criteria:
    			- The report template is updated to include a column for the Facility Agent ID.
    			- When generating reports, the system includes the Facility Agent ID in the report.
    		4) Implementation details
    			- Modify the report template to include a column for the Facility Agent ID.
    			- Update the report generation function to include the Facility Agent ID in the report.

    	4.	Ticket4: Update API to return Facility Agent IDs
    		1) Description: To enable the Facilities to see the custom ids when viewing shifts, this ticket involves
    			updating the API to return Facility Agent IDs.
    		2) Time estimate: 7 hours
    		3) Acceptance Criteria:
    			- A new field "facility_agent_id" is added to the Shifts API response.
    			- When the API is called with a Facility id, the response includes the "facility_agent_id" field.
    		4) Implementation details
    			- Add a migration to add the "facility_agent_id" field to the Shifts table in the database.
    			- Update the Shifts API response to include the "facility_agent_id" field.
    			- Update the getShiftsByFacility function to return the  "facility_agent_id" field.
    	 5. Ticket5: Add ability to search shifts by Facility Agent IDs
    		1) Description: To enable Facilities to search for shifts by the custom ids they have set for their
    			Agents, this ticket involves adding a search function to the UI
    		2) Time estimate: 7 hours
    		3) Acceptance Criteria:
    			- The UI for Facilities includes a search field for Facility Agent IDs.
    			- When the search field is used, the system returns all shifts that match the Facility Agent ID.
    		4) Implementation details
    			- Add search function to the UI to search for shifts by Facility Agent IDs.
    			- Update the getShiftsByFacility function to filter by Facility Agent IDs when the search field is
    				used.
