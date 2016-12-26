import { Component } from '@angular/core';

@Component({
    selector: 'notes-container',
    styles: [`
        .notes {
            padding-top: 50px;
        }
        .creator {
            margin-bottom: 40px; 
        }
    `],
    template: `
        <div class="row center-xs notes">
            <div class="col-xs-6 creator">
                note creator here
            </div>
            <div class="notes col-xs-8">
                <div class="row between-xs">
                    <note-card class="col-xs-4" [note]="note"></note-card>
                </div>
            </div>
        </div>
    `
})

export class NotesContainer {
    note = { 
        title: "This is a Note",
        value: "Eat some food",
        color: "lightblue"
    }
}