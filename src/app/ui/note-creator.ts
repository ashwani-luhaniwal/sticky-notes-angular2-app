import { 
    Component, 
    Output, 
    EventEmitter } from '@angular/core';

@Component({
    selector: 'note-creator',
    styles: [`
        .note-creator {
            padding: 20px;
            background-color: white;
            border-radius: 3px;
        }
        .title {
            font-weight: bold;
            color: rgba(0,0,0,0.8);
        }
        .full {
            height: 100px;
        }
    `],
    template: `
        <div class="note-creator shadow-2" [ngStyle]="{'background-color': newNote.color}">
            <form class="row" (submit)="onCreateNote()">
                <input
                    type="text"
                    [(ngModel)]="newNote.title"
                    name="newNoteTitle"
                    placeholder="Title"
                    class="col-xs-10 title"
                    *ngIf="fullForm"
                >
                <input
                    type="text"
                    (focus)="toggle(true)"
                    [(ngModel)]="newNote.value"
                    name="newNoteValue"
                    placeholder="Take a note..."
                    class="col-xs-10"
                >
                <div class="actions col-xs-12 row between-xs" *ngIf="fullForm">
                    <div class="col-xs-3">
                        <color-picker
                            [colors]="colors"
                            (selected)="onColorSelect($event)"
                        >
                        </color-picker>
                    </div>
                    <button
                        type="submit"
                        class="btn-light"
                    >
                        Done
                    </button>
                </div>
            </form>
        </div>
    `
})

export class NoteCreator {
    // custom event which is emitted from this component to 'notes' component
    @Output() createNote = new EventEmitter();

    colors: string[] = ['#B19CD9', '#FF6961', '#77DD77', '#AEC6CF', '#F49AC2', '#FFFFFF'];
    // setting default ngModel values for new note
    newNote = {
        title: '',
        value: '',
        color: '#FFFFFF'
    }
    // flag for adding toggling effect on new note form
    fullForm: boolean = false;

    // Emitting the values of newly created note to 'notes' component
    onCreateNote() {
        const {title, value, color} = this.newNote;
        if (title && value) {
            this.createNote.next({title, value, color});
        }
        this.reset();
        this.toggle(false);
    }

    // reset the note creation form to its default
    reset() {
        this.newNote = {
            title: '',
            value: '',
            color: '#FFFFFF'
        }
    }

    // toggle the note creation form
    toggle(value: boolean) {
        this.fullForm = value;
    }

    onColorSelect(color: string) {
        this.newNote.color = color;
    }
}