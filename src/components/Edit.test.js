import {render, screen, cleanup} from "@testing-library/react";
import '@testing-library/jest-dom';
import Edit from "./Edit";

afterEach(() => {
    cleanup();
});

const formData = {
    "forms": [
        {
            "name": "updateKnowledgeItemBasicDetails",
            "displayName": "Update Knowledge Item Basic Details",
            "fieldsets": [
                {
                    "displayName": "Basic Details",
                    "fields": [
                        {
                            "name": "KnownErrorTypeId",
                            "displayName": "Knowledge Item Type",
                            "type": "select",
                            "x-options": [
                                {
                                    "value": 1,
                                    "text": "FAQ"
                                },
                                {
                                    "value": 2,
                                    "text": "Advice"
                                },
                                {
                                    "value": 3,
                                    "text": "Known Error"
                                }
                            ]
                        },
                        {
                            "name": "Status",
                            "displayName": "Lifecycle Status",
                            "type": "select",
                            "x-options": [
                                {
                                    "value": 1,
                                    "text": "Published"
                                },
                                {
                                    "value": 2,
                                    "text": "Planned"
                                },
                                {
                                    "value": 3,
                                    "text": "Retired"
                                }
                            ]
                        },
                        {
                            "name": "IsPrivate",
                            "displayName": "Is Private?",
                            "type": "checkbox"
                        },
                        {
                            "name": "Summary",
                            "displayName": "Summary",
                            "type": "text"
                        }
                    ]
                }
            ]
        }
    ]
}
const editData = {
        "id": 200,
        "type": {
            "prefix": "KE",
            "id": 1,
            "name": "Known Error"
        },
        "number": "KE-223",
        "summary": "Auto Test KI Summary",
        "isPrivate": false,
        "author": {
            "id": 5280,
            "name": "Horseman, Lennie"
        },
        "service": null,
        "status": {
            "id": 2,
            "name": "Planned"
        },
        "updatedOn": "2022-04-12T08:30:36.577Z",
        "createdOn": "2022-04-12T08:30:36.577Z",
        "nextReviewOn": null
}

describe('Edit Component' , () => {

    it('render select elements', async () => {
        render(
            <Edit data={formData} editData={editData}/>
        );
        const selectElements = await screen.findAllByTestId('select');
        expect(selectElements.length).toBe(2)
    });

    it('render input element', async () => {
        render(
            <Edit data={formData} editData={editData}/>
        );
        const inputElement = await screen.findByTestId(`input`);
        expect(inputElement).toBeInTheDocument();
    });

    it('render checkbox element', async () => {
        render(
            <Edit data={formData} editData={editData}/>
        );
        const checkboxElement = await screen.findByTestId(`checkbox`);
        expect(checkboxElement).toBeInTheDocument();
    });

    it('render close button', () => {
        render(<Edit/>)
        const closeButton = screen.getByTestId('close-edit');
        expect(closeButton).toBeInTheDocument();
    })
})