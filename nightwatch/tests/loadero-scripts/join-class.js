client => { 
    if (client.globals.group.name === 'teacher-group') {
        client
            .useXpath()
            .url(`https://live.research.kidsloop.live/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlzc3VlciI6ImNhbG1pZC1kZWJ1ZyJ9.eyJhdWQiOiJraWRzbG9vcC1saXZlIiwiaXNzIjoiY2FsbWlkLWRlYnVnIiwic3ViIjoiYXV0aG9yaXphdGlvbiIsIm5hbWUiOiJBbGVjIFplYnJpY2siLCJzY2hlZHVsZV9pZCI6IjYxNGJjNDNmOGY0MmFhODRiYzkxM2RkZSIsInVzZXJfaWQiOiIwMjJhYzQyZS1hMjE2LTU3NDEtODU3OS04ZTVkNGZmMzhmNjMiLCJ0eXBlIjoibGl2ZSIsInRlYWNoZXIiOnRydWUsInJvb21pZCI6IjZlMDQ3ZTQ3YTI5NTA0YjVlN2YxNzBhY2YzZDVjNWJiZGEyYjllOTZlYjdmMTIxMzFiNTc4MDVjMmIzYzhlM3IiLCJtYXRlcmlhbHMiOlt7Im5hbWUiOiJLUiAtIEtpZHNMb29wIFNjcnVtIiwidXJsIjoiL2g1cC9wbGF5LzYwNDk2MjA0NzVhYTMyMDAxMjQ0OGY3ZSIsIl9fdHlwZW5hbWUiOiJJZnJhbWUifSx7Im5hbWUiOiJLaWRzTG9vcCBLUiBTY3J1bSBNZWV0aW5nIiwidXJsIjoiL2g1cC9wbGF5LzYwNDk1N2M4NzVhYTMyMDAxMjQ0OGY3ZCIsIl9fdHlwZW5hbWUiOiJJZnJhbWUifV0sImNsYXNzdHlwZSI6ImxpdmUiLCJvcmdfaWQiOiJjYTVjNGY4ZC1hYTYwLTQzZTQtOTM0Ny1kYzllMjA5ZmJhMzAifQ.OD9xDZnuut_hWIaJeAWg9wvnwgEmHZ7mIJ54ZQtrvXo&selectionStrategy=random`)
            .setCookie({
                name: `access`,
                value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlzc3VlciI6ImNhbG1pZC1kZWJ1ZyJ9.eyJpZCI6IjAyMmFjNDJlLWEyMTYtNTc0MS04NTc5LThlNWQ0ZmYzOGY2MyIsImVtYWlsIjoiYWxlYy56ZWJyaWNrQGtpZHNsb29wLmxpdmUiLCJleHAiOjE5NDM5NjM3MjEsImlzcyI6ImNhbG1pZC1kZWJ1ZyJ9.sfq1lB002EXCM7bpBq5RFskeUvd6rdf_Q_UCGd5Mbew`,
                path: `/`,
                domain: `.research.kidsloop.live`,
                secure: false,
                httpOnly: false,
            })
            .waitForElementVisible(`//body`)
            .assert.titleContains("KidsLoop Live")
            .waitForElementVisible(`//button[normalize-space()='Join Room'][not(@disabled)]`)
            .click(`//button[normalize-space()='Join Room'][not(@disabled)]`)
            .waitForElementNotPresent(`//h6[normalize-space()='Loading'][not(@disabled)]`)
            .verify.visible(`//div[@id='main-content']`)
            .takeScreenshot('teacher.png')
    }

    if (client.globals.group.name === 'student-group') {
    client
        .useXpath()
        .url(`https://live.research.kidsloop.live?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlzc3VlciI6ImNhbG1pZC1kZWJ1ZyJ9.eyJhdWQiOiJraWRzbG9vcC1saXZlIiwiaXNzIjoiY2FsbWlkLWRlYnVnIiwic3ViIjoiYXV0aG9yaXphdGlvbiIsIm5hbWUiOiJBbGVjIFplYnJpY2siLCJzY2hlZHVsZV9pZCI6IjYxNGJjNDNmOGY0MmFhODRiYzkxM2RkZSIsInVzZXJfaWQiOiIwMjJhYzQyZS1hMjE2LTU3NDEtODU3OS04ZTVkNGZmMzhmNjMiLCJ0eXBlIjoibGl2ZSIsInRlYWNoZXIiOmZhbHNlLCJyb29taWQiOiI2ZTA0N2U0N2EyOTUwNGI1ZTdmMTcwYWNmM2Q1YzViYmRhMmI5ZTk2ZWI3ZjEyMTMxYjU3ODA1YzJiM2M4ZTNyIiwibWF0ZXJpYWxzIjpbeyJuYW1lIjoiS1IgLSBLaWRzTG9vcCBTY3J1bSIsInVybCI6Ii9oNXAvcGxheS82MDQ5NjIwNDc1YWEzMjAwMTI0NDhmN2UiLCJfX3R5cGVuYW1lIjoiSWZyYW1lIn0seyJuYW1lIjoiS2lkc0xvb3AgS1IgU2NydW0gTWVldGluZyIsInVybCI6Ii9oNXAvcGxheS82MDQ5NTdjODc1YWEzMjAwMTI0NDhmN2QiLCJfX3R5cGVuYW1lIjoiSWZyYW1lIn1dLCJjbGFzc3R5cGUiOiJsaXZlIiwib3JnX2lkIjoiY2E1YzRmOGQtYWE2MC00M2U0LTkzNDctZGM5ZTIwOWZiYTMwIn0.yS4RSQ2WSyDwiDxrXF4yXLy2hSbdCWVI_Gw_y4DRQHg&selectionStrategy=random`)
        .setCookie({
            name: `access`,
            value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlzc3VlciI6ImNhbG1pZC1kZWJ1ZyJ9.eyJpZCI6IjAyMmFjNDJlLWEyMTYtNTc0MS04NTc5LThlNWQ0ZmYzOGY2MyIsImVtYWlsIjoiYWxlYy56ZWJyaWNrQGtpZHNsb29wLmxpdmUiLCJleHAiOjE5NDM5NjM3MjEsImlzcyI6ImNhbG1pZC1kZWJ1ZyJ9.sfq1lB002EXCM7bpBq5RFskeUvd6rdf_Q_UCGd5Mbew`,
            path: `/`,
            domain: `.research.kidsloop.live`,
            secure: false,
            httpOnly: false,
        })
        .waitForElementVisible(`//body`)
        .assert.titleContains("KidsLoop Live")
        .waitForElementVisible(`//button[normalize-space()='Join Room'][not(@disabled)]`)
        .click(`//button[normalize-space()='Join Room'][not(@disabled)]`)
        .waitForElementNotPresent(`//h6[normalize-space()='Loading'][not(@disabled)]`)
        .verify.visible(`//div[@id='main-content']`)
        .takeScreenshot('student.png')
}

    client.end();


}
