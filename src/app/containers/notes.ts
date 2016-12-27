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
                <note-creator (createNote)="onCreateNote($event)"></note-creator>
            </div>
            <div class="notes col-xs-8">
                <div class="row between-xs">
                    <note-card 
                        class="col-xs-4" 
                        [note]="note"
                        *ngFor="let note of notes; let i = index"
                        (checked)="onNoteChecked(i)"
                    >
                    </note-card>
                </div>
            </div>
        </div>
    `
})

export class NotesContainer {
    // Sample notes for our application
    notes = [
        { 
            title: "Meeting",
            value: "Today, we have a meeting at 2\'o clock.",
            color: "lightblue"
        },
        { 
            title: "Dinner",
            value: "We have to go to BBQ for dinner tomorrow evening.",
            color: "red"
        },
        { 
            title: "Birthday Celebration",
            value: "On 17th of this month, I have to make perfect arrangements for birthday celebrations.",
            color: "yellow"
        }
    ]

    // deleting specific note from 'notes' array
    onNoteChecked(i: number) {
        this.notes.splice(i, 1);
    }

    // adding new note in the 'notes' array using event emitted from 'note-creator' component
    onCreateNote(note) {
        this.notes.push(note);
    }
}