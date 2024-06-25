# React calendar

Create with create react app

Run <code>docker-compose up</code> or use your ide to run <code>docker-compose.yml</code>

See changes @ http://localhost:3000

Runs on node 18 and uses Zustand

## Data structure
- Calendar
  - selectedDate
  - Data: array
    - Data
      - id
      - name
  - Appointments: array
    - Appointment
      - id
      - date
        - Events
          - start
          - end
          - RoomId