logout = () => {
  fetch('https://academy-video-api.herokuapp.com/auth/logout'),
    {
      method: 'POST',
      body: JSON.stringify({
        token: localStorage.getItem('token'),
      }),
      headers: { 'Content-Type': 'application/json' },
    }.then((res) => {
      if (!res.ok) {
        return res;
      }

      localStorage.removeItem('token');
      this.PaymentResponse.history.replace('/');
    });
};
