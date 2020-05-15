<div>
  <Summary
    icon={<MoneyIcon size="md" />}
    title="Add money to your account"
    help={{
      title: 'Add money to your account',
      content: (
        <>
          To open your account, you’ll need to add money to it at least once.
          <br />
          This isn’t a fee — it’s still your money. It just means that you’re ready to go once
          you’re verified.
        </>
      ),
    }}
  />
  <Summary icon={<IdIcon size="md" />} title="You uploaded you identity documents" />
  <Summary
    icon={<HomeIcon size="md" />}
    title="You entered your card delivery address"
    content={
      <>
        Flat 3 Chaplin House, Shepperton Road
        <br />
        London N1 2NE
        <br />
        <a href="#foo">Edit address</a>
      </>
    }
    help={{
      title: 'Enter your card address',
      content: 'When your card is ready we’ll post it to your home address.',
    }}
  />
</div>;
